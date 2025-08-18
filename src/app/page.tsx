"use client";
import { Box, Container, Grid } from "@mantine/core";
import Image from "next/image";
import Home02 from "../assets/home/home_02.jpg";
import Home04 from "../assets/home/home_04.jpg";
import Home05 from "../assets/home/home_05.jpg";
import Home07 from "../assets/home/home_07.jpg";
import Home08 from "../assets/home/home_08.jpg";
import Home09 from "../assets/home/home_09.jpg";
import { IllustrationThumbnail } from "@/components/IllustrationThumbnail";
import MasonryPage from "@/components/MasonryPage";
import { IllustrationSlideshow } from "@/components/IllustrationSlideshow";

const illustrationList = [
  Home04,
  Home02,
  Home05,
  Home09,
  Home08,
  Home07,
]

export default function Home() {
  const getIllustrationThumbnails = () => {
    return illustrationList.map((image, index) => (
      <IllustrationThumbnail key={index} title={`${index + 1}`} image={image} noHover />
    ))
  }
  return (
    <MasonryPage items={getIllustrationThumbnails()} />
  );
}
