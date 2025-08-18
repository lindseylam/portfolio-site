"use client";

import { Carousel } from "@mantine/carousel";
import { Box, CloseButton, Container, Grid, Stack, Text, Title } from "@mantine/core";
import { useModals } from "@mantine/modals";
import Image, { StaticImageData } from "next/image";
import SpringGreetingCover from "../../../assets/comics/a-spring-greeting/asg_01.jpg";
import SpringGreeting02 from "../../../assets/comics/a-spring-greeting/asg_02.jpg";
import SpringGreeting03 from "../../../assets/comics/a-spring-greeting/asg_03.jpg";
import BimyCover from "../../../assets/comics/before-i-miss-you/bimy_01.jpg";
import Bimy02 from "../../../assets/comics/before-i-miss-you/bimy_02.png";
import Bimy03 from "../../../assets/comics/before-i-miss-you/bimy_03.png";
import Bimy04 from "../../../assets/comics/before-i-miss-you/bimy_04.png";
import Bimy05 from "../../../assets/comics/before-i-miss-you/bimy_05.png";
import Bimy06 from "../../../assets/comics/before-i-miss-you/bimy_06.png";
import Bimy07 from "../../../assets/comics/before-i-miss-you/bimy_07.png";
import Bimy08 from "../../../assets/comics/before-i-miss-you/bimy_08.png";
import Bimy09 from "../../../assets/comics/before-i-miss-you/bimy_09.png";
import MantrasCover from "../../../assets/comics/mantras/mantras_01.jpg";
import Mantras02 from "../../../assets/comics/mantras/mantras_02.jpg";
import Mantras03 from "../../../assets/comics/mantras/mantras_03.jpg";
import Mantras04 from "../../../assets/comics/mantras/mantras_04.jpg";
import Mantras05 from "../../../assets/comics/mantras/mantras_05.jpg";
import Mantras06 from "../../../assets/comics/mantras/mantras_06.jpg";
import Mantras07 from "../../../assets/comics/mantras/mantras_07.jpg";
import Mantras08 from "../../../assets/comics/mantras/mantras_08.jpg";
import Mantras09 from "../../../assets/comics/mantras/mantras_09.jpg";
import Mantras10 from "../../../assets/comics/mantras/mantras_10.jpg";
import MyGirlTheVoidCover from "../../../assets/comics/my-girl-the-void/mgtv_01.jpg";
import MyGirlTheVoid02 from "../../../assets/comics/my-girl-the-void/mgtv_02.jpg";
import MyGirlTheVoid03 from "../../../assets/comics/my-girl-the-void/mgtv_03.jpg";
import MyGirlTheVoid04 from "../../../assets/comics/my-girl-the-void/mgtv_04.jpg";
import MyGirlTheVoid05 from "../../../assets/comics/my-girl-the-void/mgtv_05.jpg";
import MyGirlTheVoid06 from "../../../assets/comics/my-girl-the-void/mgtv_06.jpg";
import MyGirlTheVoid07 from "../../../assets/comics/my-girl-the-void/mgtv_07.jpg";
import MyGirlTheVoid08 from "../../../assets/comics/my-girl-the-void/mgtv_08.jpg";
import MyGirlTheVoid09 from "../../../assets/comics/my-girl-the-void/mgtv_09.jpg";
import MyGirlTheVoid10 from "../../../assets/comics/my-girl-the-void/mgtv_10.jpg";
import classes from '../comics.module.css'

const comicConfigs: ComicThumbnailProps[] = [
    {
        title: "Mantras For Madwomen",
        cover: MantrasCover,
        images: [MantrasCover, Mantras02, Mantras03, Mantras04, Mantras05, Mantras06, Mantras07, Mantras08, Mantras09, Mantras10],
        description: "2025. A 10-page comic about angry women.",
    },
    {
        title: "My Girl, The Void",
        cover: MyGirlTheVoidCover,
        images: [MyGirlTheVoidCover, MyGirlTheVoid02, MyGirlTheVoid03, MyGirlTheVoid04, MyGirlTheVoid05, MyGirlTheVoid06, MyGirlTheVoid07, MyGirlTheVoid08, MyGirlTheVoid09, MyGirlTheVoid10],
        description: "2024. A 9-page comic about a new girlfriend who happens to be a void entity.",
    },
    {
        title: "Before I Miss You",
        cover: BimyCover,
        images: [BimyCover, Bimy02, Bimy03, Bimy04, Bimy05, Bimy06, Bimy07, Bimy08, Bimy09],
        description: "2024. An 8-page comic about missed connections.",
    },
    {
        title: "A Spring Greeting",
        cover: SpringGreetingCover,
        images: [SpringGreetingCover, SpringGreeting02, SpringGreeting03],
        description: "2021. A 3-page comic about meeting a new friend with the coming of spring.",
    }
]

interface ComicThumbnailProps {
    title: string;
    description: string;
    images: StaticImageData[];
    cover: StaticImageData;
}

const ComicThumbnail = (props: ComicThumbnailProps) => {
    const { title, cover, images, description } = props;
    const modals = useModals();
    
    const handleClick = () => {
        modals.openModal({
            children: <ComicSlideshow title={title} images={images} />,
            withCloseButton: false,
            fullScreen: true,
            padding: '0px',
            styles: {
                body: {
                    backgroundColor: 'black',
                },
            },
            transitionProps: {
                transition: 'fade',
                duration: 300,
            },
            overlayProps: {
                backgroundOpacity: 1,
            },
        
        });
    }
    return (    
        <Box>
            <Box h={{base: 300, md: 400, lg: 300}} mb="sm" style={{position: 'relative', cursor: 'pointer'}}>
                <Image src={cover} alt={title} style={{objectFit: "cover", width: '100%', height: '100%'}} />
                <Box 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        padding: '10px',
                        textAlign: 'center',
                    }}
                    onClick={handleClick}
                    className="comic-overlay"
                >
                    <Text size="lg" fw={600} style={{color: 'white'}}>{`Read ${title}`}</Text>
                </Box>
            </Box>
            <Stack gap="sm">
                <Title order={3} style={{fontFamily: "var(--font-major-mono-display)"}}>{title}</Title>
                <Text size='sm'>{description}</Text>
            </Stack>
        </Box>
    )
}

interface ComicSlideshowProps {
    title: string;
    images: StaticImageData[];
}

const ComicSlideshow = (props: ComicSlideshowProps) => {
    const { title, images } = props;
    const modals = useModals();
    return (<Box h={'100vh'} w={'100%'} style={{position: 'relative', display: 'flex', }}>
        <CloseButton style={{position: 'absolute', top: 0, right: 0, zIndex: 1000}} onClick={() => modals.closeAll()} variant="transparent" size="lg" />
        <Carousel 
            classNames={classes}
            controlSize={30}
            flex={1}
            height={'100%'}
        >
            {
                images.map((image, index) => (
                    <Carousel.Slide key={index} style={{padding: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                        <Box style={{position: 'relative', height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Image 
                                src={image} 
                                alt={title} 
                                style={{
                                    maxHeight: '100vh',
                                    maxWidth: '100%',
                                    height: 'auto',
                                    width: 'auto',
                                    objectFit: 'contain'
                                }} 
                            />
                        </Box>
                    </Carousel.Slide>
                ))
            }
        </Carousel>
        </Box>
    )
}
export default function Comics() {
    return (
        <Container pt="xl" pb="xl">
            <Grid gutter="50">
                {
                    comicConfigs.map((config) => (
                        <Grid.Col span={{base: 12, md: 6, lg: 4}} key={config.title}>
                            <ComicThumbnail key={config.title} {...config} />
                        </Grid.Col>
                    ))
                }
            </Grid>
        </Container>
    );
}

