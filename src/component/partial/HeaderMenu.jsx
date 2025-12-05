import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

// Transform Strapi menu data to match component structure
const transformMenuData = (strapiMenus) => {
  if (!strapiMenus || strapiMenus.length === 0) {
    return [];
  }

  // Transform function to handle fixed-level structure (item -> child -> grandchild)
  // Frontend will render recursively, but Strapi structure is fixed to avoid recursion errors
  const transformGrandchild = (grandchild) => {
    return {
      name: grandchild.name || '',
      link: grandchild.link || '#',
      image: "/icons/menuicon.png",
      children: [], // Final level, no more children
    };
  };

  const transformChild = (child) => {
    return {
      name: child.name || '',
      link: child.link || '#',
      image: "/icons/menuicon.png",
      children: (child.children && Array.isArray(child.children) && child.children.length > 0)
        ? child.children.map(transformGrandchild)
        : [],
    };
  };

  const transformDropdownItem = (item) => {
    return {
      name: item.name || '',
      link: item.link || '#',
      image: "/icons/menuicon.png",
      children: (item.children && Array.isArray(item.children) && item.children.length > 0)
        ? item.children.map(transformChild)
        : [],
    };
  };

  return strapiMenus.map(menu => {
    const transformed = {
      title: menu.title || '',
      image: "/icons/menuicon.png",
      dropdownList: [],
    };

    // Transform dropdown list items
    if (menu.dropdownList && Array.isArray(menu.dropdownList) && menu.dropdownList.length > 0) {
      transformed.dropdownList = menu.dropdownList.map(transformDropdownItem);
    }

    return transformed;
  });
};

const HeaderMenu = ({ mobileMenuOpen, menuData: strapiMenuData }) => {
  // Transform Strapi data - only use Strapi data, no fallback
  const transformedMenuData = strapiMenuData && strapiMenuData.length > 0 
    ? transformMenuData(strapiMenuData) 
    : [];
  
  // ALL HOOKS MUST BE DEFINED BEFORE ANY CONDITIONAL RETURNS
  const [hoveredMenuIndex, setHoveredMenuIndex] = useState(null);
  const [hoveredItemsByLevel, setHoveredItemsByLevel] = useState({});
  const [mobileMenuState, setMobileMenuState] = useState({
    currentMenu: null,
    expandedItems: []
  });
  const dropdownRef = useRef(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [userHasScrolled, setUserHasScrolled] = useState(false);

  // Reset all states when mobileMenuOpen changes (switching between mobile/desktop)
  useEffect(() => {
    setHoveredMenuIndex(null);
    setHoveredItemsByLevel({});
    setMobileMenuState({
      currentMenu: null,
      expandedItems: []
    });
  }, [mobileMenuOpen]);

  useEffect(() => {
    const el = dropdownRef.current;
    if (!el) return;

    const checkScroll = () => {
      const isScrollable = el.scrollHeight > el.clientHeight;
      const isAtBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 2;

      // Only show indicator if scrollable, not at bottom, and user hasn't scrolled yet
      setShowScrollIndicator(isScrollable && !isAtBottom && !userHasScrolled);
    };

    const handleScrollStart = () => {
      setUserHasScrolled(true);
    };

    // Initial check and setup observer for content changes
    checkScroll();

    const resizeObserver = new ResizeObserver(checkScroll);
    resizeObserver.observe(el);

    el.addEventListener("scroll", checkScroll);
    el.addEventListener("scroll", handleScrollStart); // Add scroll start listener
    window.addEventListener("resize", checkScroll);

    return () => {
      resizeObserver.disconnect();
      el.removeEventListener("scroll", checkScroll);
      el.removeEventListener("scroll", handleScrollStart);
      window.removeEventListener("resize", checkScroll);
    };
  }, [hoveredMenuIndex, userHasScrolled]); // Add userHasScrolled to dependencies

  // Reset userHasScrolled when menu changes
  useEffect(() => {
    setUserHasScrolled(false);
  }, [hoveredMenuIndex]);

  // If no menu data, return null (don't render menu) - MUST BE AFTER ALL HOOKS
  if (!transformedMenuData || transformedMenuData.length === 0) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('HeaderMenu: No Strapi menu data available. Make sure to create and publish header content in Strapi.');
    }
    return null;
  }

  const handleMenuHover = (index, menu) => {
    if (!mobileMenuOpen) {
      setHoveredMenuIndex(index);

      // Set first dropdown item as hovered if menu has dropdown list
      if (menu.dropdownList && Array.isArray(menu.dropdownList) && menu.dropdownList.length > 0) {
        const firstItem = menu.dropdownList[0];
        setHoveredItemsByLevel({ 0: firstItem });
      } else {
        setHoveredItemsByLevel({});
      }
    }
  };


  const handleLeave = () => {
    // if (!mobileMenuOpen) {
    //   setHoveredMenuIndex(null);
    //   setHoveredSection(null);
    //   setHoveredSubItem(null);
    // }
  };

  const handleMobileMenuToggle = (e, index) => {
    if (!mobileMenuOpen) return;
    e.stopPropagation();
    setMobileMenuState(prev => ({
      currentMenu: prev.currentMenu === index ? null : index,
      currentSection: null,
      currentSubItem: null
    }));
  };


  const handleMobileSubItemToggle = (e, itemKey) => {
    if (!mobileMenuOpen) return;
    e.stopPropagation();
    setMobileMenuState(prev => {
      const expandedItems = prev.expandedItems || [];
      const isExpanded = expandedItems.includes(itemKey);
      return {
      ...prev,
        expandedItems: isExpanded 
          ? expandedItems.filter(key => key !== itemKey)
          : [...expandedItems, itemKey]
      };
    });
  };

  // Recursive function to render mobile menu items
  const renderMobileMenuItem = (item, level = 0, parentKey = '') => {
    const hasChildren = item.children && item.children.length > 0;
    const itemKey = parentKey ? `${parentKey}-${item.name}` : `${item.name}-${level}`;
    const expandedItems = mobileMenuState.expandedItems || [];
    const isExpanded = expandedItems.includes(itemKey);
    const isNested = level > 0;

    return (
      <div key={itemKey} className={level === 0 ? "mobileMenuItem" : "mobileMenuSubItem"}>
        <div className={`${level === 0 ? "mobileMenuHeader" : "mobileMenuSubItemHeader"} ${isNested ? "mobileMenuHeaderNested" : ""}`}>
          <a
            href={item.link || '#'}
            className={level === 0 ? "mobileMenuTitle" : "mobileMenuItemLink"}
            onClick={(e) => {
              if (hasChildren) {
                e.preventDefault();
                handleMobileSubItemToggle(e, itemKey);
              }
            }}
          >
            {level === 0 ? item.name : <div dangerouslySetInnerHTML={{ __html: item.name }} />}
          </a>
          {hasChildren && (
            <button
              className="mobileMenuToggle"
              onClick={(e) => {
    e.stopPropagation();
                handleMobileSubItemToggle(e, itemKey);
              }}
            >
              <ChevronRight
                size={16}
                className={`mobileMenuIcon ${isExpanded ? 'rotate-90' : ''}`}
              />
            </button>
          )}
        </div>

        {isExpanded && hasChildren && (
          <div className={`${level === 0 ? "mobileMenuContent" : "mobileMenuSubChildren"} ${isNested ? "mobileMenuContentNested" : ""}`}>
            {item.children.map((child) => renderMobileMenuItem(child, level + 1, itemKey))}
          </div>
        )}
      </div>
    );
  };

  const renderMobileMenu = () => {
    return (
      <div className="mobileMenuContainer">
        {transformedMenuData.map((menu, index) => (
          <div key={index} className="mobileMenuItem">
            <div className="mobileMenuHeader">
              <a
                href="#"
                className="mobileMenuTitle"
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileMenuToggle(e, index);
                }}
              >
                {menu.title}
              </a>
              {menu.dropdownList && menu.dropdownList.length > 0 && (
                <button
                  className="mobileMenuToggle"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMobileMenuToggle(e, index);
                  }}
                >
                  <ChevronRight
                    size={16}
                    className={`mobileMenuIcon ${mobileMenuState.currentMenu === index ? 'rotate-90' : ''}`}
                  />
                </button>
              )}
            </div>

            {mobileMenuState.currentMenu === index && menu.dropdownList && menu.dropdownList.length > 0 && (
              <div className="mobileMenuContent">
                {menu.dropdownList.map((item) => renderMobileMenuItem(item, 0))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <nav className={mobileMenuOpen ? "navLinksMobile" : "navLinks"}>
      {mobileMenuOpen ? (
        renderMobileMenu()
      ) : (
        <>
          {transformedMenuData.map((menu, index) => (
            <div
              className="navItem"
              key={index}
              onMouseEnter={() => handleMenuHover(index, menu)}
              onMouseLeave={handleLeave}
            >
              <div className="navTitle">
                {menu.title} <ChevronDown size={16} />
              </div>


              {hoveredMenuIndex === index && menu.dropdownList && menu.dropdownList.length > 0 && (
                <div className={`dropdown ${(() => {
                  // Check if any item has children
                  const hasChildren = menu.dropdownList.some(item => item.children && item.children.length > 0);
                  return hasChildren ? 'dropdownMultiple' : 'dropdownSingle';
                })()}`} ref={dropdownRef}>
                  {(() => {
                    // Check if any item has children
                    const hasChildren = menu.dropdownList.some(item => item.children && item.children.length > 0);
                    
                    if (!hasChildren) {
                      // Single column dropdown - simple list
                      return (
                        <div className="dropdownContainer dropdownContainerSingle">
                          {menu.dropdownList.map((item, idx) => (
                      <a key={idx} href={item.link} className="dropdownItem">
                        <div className='flex items-center gap-4'>
                                <div dangerouslySetInnerHTML={{ __html: item.name }} />
                        </div>
                          </a>
                        ))}
                      </div>
                      );
                    } else {
                      // Multiple columns dropdown - always 3 columns, fixed width
                      const renderColumns = (items, level = 0) => {
                        if (!items || items.length === 0) return null;
                        
                        const hoveredItem = hoveredItemsByLevel[level];
                        const columns = [];
                        
                        // Render current level column
                        columns.push(
                          <div key={level} className={`dropdownSection ${level === 0 ? '' : 'dropdownGroup'}`}>
                            {items.map((item, idx) => {
                              const isActive = hoveredItem?.name === item.name;
                              const hasChildren = item.children && item.children.length > 0;
                              
                              return (
                              <a
                                  key={idx}
                                  href={item.link}
                                  onMouseEnter={() => {
                                    const newHovered = { ...hoveredItemsByLevel };
                                    newHovered[level] = item;
                                    // Clear deeper levels
                                    Object.keys(newHovered).forEach(key => {
                                      if (parseInt(key) > level) {
                                        delete newHovered[key];
                                      }
                                    });
                                    setHoveredItemsByLevel(newHovered);
                                  }}
                                  className={`dropdownItem ${level === 0 ? 'st1column' : ''} ${isActive ? 'active-link' : ''}`}
                              >
                                <div className='flex items-center gap-4 justify-between w-full'>
                                    <div dangerouslySetInnerHTML={{ __html: item.name }} />
                                    {hasChildren && isActive && (
                                      <ChevronRight className="flex-shrink-0" size={16} />
                                    )}
                                </div>
                              </a>
                              );
                            })}
                          </div>
                        );
                        
                        // If hovered item has children, render next column recursively
                        if (hoveredItem?.children && hoveredItem.children.length > 0) {
                          const nextColumns = renderColumns(hoveredItem.children, level + 1);
                          if (nextColumns) {
                            columns.push(...(Array.isArray(nextColumns) ? nextColumns : [nextColumns]));
                          }
                        }
                        
                        return columns.length > 0 ? columns : null;
                      };

                      const columns = renderColumns(menu.dropdownList, 0);
                      // Always show 3 columns - fill with empty columns if needed
                      const maxColumns = 3;
                      const currentColumns = columns ? (Array.isArray(columns) ? columns : [columns]) : [];
                      
                      // Ensure we always have 3 columns
                      while (currentColumns.length < maxColumns) {
                        currentColumns.push(<div key={`empty-${currentColumns.length}`} className="dropdownSection"></div>);
                      }
                      
                      return (
                        <div className="dropdownContainer dropdownContainerMultiple">
                          {currentColumns.slice(0, maxColumns)}
                        </div>
                      );
                    }
                  })()}
                  {showScrollIndicator && <div className="scrollIndicator">↓</div>}
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </nav>
  );
};

export default HeaderMenu;