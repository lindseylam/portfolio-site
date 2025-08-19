'use client'

import { Anchor, AppShell, Box, Burger, createTheme, Group, MantineProvider, NavLink, Stack, Title } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";
import { ModalsProvider } from '@mantine/modals';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavlinkClasses from './navlink.module.css';

const theme = createTheme({
    components: {
        NavLink: NavLink.extend({
            classNames: NavlinkClasses,
        }),
        Anchor: Anchor.extend({
            styles: {
                root: {
                    color: "black",
                    fontWeight: 600,
                },
            },
        }),
    },
    fontFamily: "var(--font-ibm-plex-mono)",
});

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure(false);
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

    return (<MantineProvider theme={theme}>
        <ModalsProvider>
        <AppShell
            padding="md"
            header={{ height: { base: 60, sm: 0 } }}
            navbar={{
                width: 220,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            styles={{
                main: { backgroundColor: "var(--background)", color: "var(--foreground)" },
                navbar: { backgroundColor: "var(--background)", color: "var(--foreground)" },
                header: { backgroundColor: "var(--background)", color: "var(--foreground)" }
            }}
        >
            <AppShell.Header withBorder={false}             
            >
                <Group p="md" hiddenFrom="sm" justify="space-between">
                    <Link href="/">
                        <Title order={1} style={{fontFamily: "var(--font-major-mono-display)"}}>Lindsey Lam</Title>
                    </Link>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        size="sm"
                    />
                </Group>
            </AppShell.Header>
            <AppShell.Navbar withBorder={false} p="md" 
            >
                <Stack pt="xl" gap="md">
                    <Box pl="sm" visibleFrom="sm">
                        <Link href="/">
                            <Title order={1} style={{fontFamily: "var(--font-major-mono-display)"}}>Lindsey Lam</Title>
                        </Link>
                    </Box>
                    <Stack gap="0">
                        {
                            navLinkConfigs.map((config) => (
                                <NavLink active={isActive(config.href)} 
                                href={config.href}
                                key={config.href} 
                                style={{fontFamily: "var(--font-ibm-plex-mono)"}} 
                                label={config.label}
                                rightSection={null}
                                opened={true}
                                >
                                    {config.subLinks?.map((subLink) => (
                                        <NavLink key={subLink.href} href={subLink.href} label={subLink.label} active={isActive(subLink.href)} style={{fontFamily: "var(--font-ibm-plex-mono)"}} />
                                    ))}
                                </NavLink>
                            ))
                        }
                    </Stack>
                </Stack>
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
        </ModalsProvider>
    </MantineProvider>
    )
}

const navLinkConfigs = [
    {
        label: "Illustration",
        href: "/illustration",
        subLinks: [
            {
                label: 'Selected',
                href: "/illustration/selected",
            },
            {
                label: 'Outfit Studies',
                href: "/illustration/outfit-studies",
            }
        ]
    },
    {
        label: "Comics",
        href: "/comics",
        subLinks: [
            {
                label: 'Selected',
                href: "/comics/selected",
            },
            {
                label: 'Everyday Foibles',
                href: "/comics/everyday-foibles",
            }
        ]
    },
    // {
    //     label: "Zine",
    //     href: "/zine",
    // },
    {
        label: "About",
        href: "/about",
    },
]