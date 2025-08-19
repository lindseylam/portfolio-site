'use client'

import { IllustrationThumbnail, IllustrationThumbnailProps } from "@/components/IllustrationThumbnail";
import MasonryPage from "@/components/MasonryPage";
import OutfitStudy01 from '../../../assets/illustration/outfits/outfits_01.jpg';
import OutfitStudy10 from '../../../assets/illustration/outfits/outfits_010.jpg';
import OutfitStudy02 from '../../../assets/illustration/outfits/outfits_02.jpg';
import OutfitStudy03 from '../../../assets/illustration/outfits/outfits_03.jpg';
import OutfitStudy04 from '../../../assets/illustration/outfits/outfits_04.jpg';
import OutfitStudy05 from '../../../assets/illustration/outfits/outfits_05.jpg';
import OutfitStudy06 from '../../../assets/illustration/outfits/outfits_06.jpg';
import OutfitStudy08 from '../../../assets/illustration/outfits/outfits_08.jpg';
import OutfitStudy09 from '../../../assets/illustration/outfits/outfits_09.jpg';

export default function OutfitStudiesPage() {
    const getIllustrationThumbnails = () => {
        return illustrationConfigs.map((config, index) => (
            <IllustrationThumbnail {...config} images={illustrationConfigs.map((config) => config.image)} index={index} key={index} />
        ))
    }
    return <MasonryPage items={getIllustrationThumbnails()} />
}

const illustrationConfigs: IllustrationThumbnailProps[] = [
    {
        title: "01",
        image: OutfitStudy01,
    },
    {
        title: "02",
        image: OutfitStudy02,
    },
    {
        title: "03",
        image: OutfitStudy03,
    },
    {
        title: "04",
        image: OutfitStudy05,
    },
    {
        title: "05",
        image: OutfitStudy04,
    },

    {
        title: "06",
        image: OutfitStudy06,
    },
    {
        title: "07",
        image: OutfitStudy08,
    },
    {
        title: "08",
        image: OutfitStudy09,
    },
    {
        title: "09",
        image: OutfitStudy10,
    },
]