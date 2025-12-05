'use client'
import {SMMBanner} from '@/component/pages/socialMediaMarketing/SMMBanner';
import {SMMAbout} from '@/component/pages/socialMediaMarketing/SMMAbout';
import {SMMSpectrum} from '@/component/pages/socialMediaMarketing/SMMSpectrum';
import {SMMStats} from '@/component/pages/socialMediaMarketing/SMMStats';
import {SMMData} from '@/component/pages/socialMediaMarketing/SMMData';
import { SMMCommonBwCard } from '@/component/pages/socialMediaMarketing/SMMCommonBwCard';
import { SMMAdvertising } from '@/component/pages/socialMediaMarketing/SMMAdvertising';
import {SMO} from '@/component/pages/socialMediaMarketing/SMO';
import {SMMRoi} from '@/component/pages/socialMediaMarketing/SMMRoi';
import { SMMCaseBoxes } from '@/component/pages/socialMediaMarketing/SMMCaseBoxes';
import {SMMSocialMediaTools} from '@/component/pages/socialMediaMarketing/SMMSocialMediaTools';
import { SMMSocialPartner } from '@/component/pages/socialMediaMarketing/SMMSocialPartner';
import {SMMFaq} from '@/component/pages/socialMediaMarketing/SMMFaq';
import {SMMFooter} from '@/component/pages/socialMediaMarketing/SMMFooter';
import { SMMArrowGrid } from '@/component/pages/socialMediaMarketing/SMMArrowGrid';
import CommonDivider from '@/component/pages/common/CommonDivider';

const page = () => {
  return (
    <>
    <SMMBanner />
    
    <CommonDivider /><SMMAbout />
    
    <CommonDivider /><SMMSpectrum />
    
    <CommonDivider /><SMMStats />
    
    <CommonDivider /><SMMData />
    
    <CommonDivider /><SMMCommonBwCard />
    
    <CommonDivider /><SMMAdvertising />
    
    <CommonDivider /><SMO />
    
    <CommonDivider /><SMMRoi />
    
    <CommonDivider /><SMMCaseBoxes />
    
    <CommonDivider /><SMMSocialMediaTools />
    
    <CommonDivider /><SMMSocialPartner />

    <CommonDivider /><SMMFaq />
    
    <CommonDivider /><SMMArrowGrid/>

    <SMMFooter />
    </>
  )
}

export default page