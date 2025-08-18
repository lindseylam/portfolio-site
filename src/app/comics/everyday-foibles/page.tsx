'use client'
import { IllustrationThumbnail, IllustrationThumbnailProps } from "@/components/IllustrationThumbnail";
import MasonryPage from "@/components/MasonryPage"; 
import EverydayFoibles01 from '../../../assets/comics/everyday-foibles/everyday_foibles_01.jpg';
import EverydayFoibles02 from '../../../assets/comics/everyday-foibles/everyday_foibles_02.jpg';
import EverydayFoibles03 from '../../../assets/comics/everyday-foibles/everyday_foibles_03.jpg';


export default function EverydayFoiblesPage() {
    const getComicThumbnails = () => {
        return comicConfigs.map((config, index) => (
            <IllustrationThumbnail {...config} images={comicConfigs.map((config) => config.image)} index={index} />
        ))
    }
    return <MasonryPage items={getComicThumbnails()} />
}

const comicConfigs: IllustrationThumbnailProps[] = [
    {
        title: '01',
        image: EverydayFoibles01,
    },
    {
        title: '02',
        image: EverydayFoibles02,
    },
    {
        title: '03',
        image: EverydayFoibles03,
    }
]