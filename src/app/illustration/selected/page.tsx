"use client"
import { IllustrationThumbnail, IllustrationThumbnailProps } from "@/components/IllustrationThumbnail";
import MasonryPage from "@/components/MasonryPage";
import FreshOutOfEden from '../../../assets/illustration/fresh_out_of_eden.jpg';
import IfYoureADream from '../../../assets/illustration/if_youre_a_dream.jpg';
import OnTheGo from '../../../assets/illustration/on_the_go.jpg';
import TheCrowsKnow from '../../../assets/illustration/the_crows_know.jpg';
import UncertainLight from '../../../assets/illustration/uncertain_light.jpg';
import WildEyes from '../../../assets/illustration/wild_eyes.jpg';

export default function SelectedIllustrationsPage() {

    const getIllustrationThumbnails = () => {
        return illustrationConfigs.map((config, index) => (
            <IllustrationThumbnail {...config} images={illustrationConfigs.map((config) => config.image)} index={index} />
        ))
    }
    return <MasonryPage items={getIllustrationThumbnails()} />
}

const illustrationConfigs: IllustrationThumbnailProps[] = [
    {
        title: "Fresh Out Of Eden",
        year: "2025",
        image: FreshOutOfEden,
    },
    {
        title: "If You're a Dream Don't Tell Me",
        year: "2025",
        image: IfYoureADream,
    },
    {
        title: "Wild Eyes",
        year: "2025",
        image: WildEyes,
    },
    {
        title: "The Crows Know",
        year: "2024",
        image: TheCrowsKnow,
    },
    {
        title: "On The Go",
        year: "2022",
        image: OnTheGo,
    },
    {
        title: "Uncertain Light",
        year: "2022",
        image: UncertainLight,
    },
]

