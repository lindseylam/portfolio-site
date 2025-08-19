import { reorderIllustrationsForColumns } from "@/utils/helperFns";
import { Container, Box } from "@mantine/core";
import { useState, useRef, useEffect } from "react";

interface MasonryPageProps {
    items: React.ReactNode[];
}

export default function MasonryPage({items}: MasonryPageProps) {
    const [columnCount, setColumnCount] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const updateColumnCount = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const columnWidth = 275;
                const gap = 16;
                const cols = Math.floor((containerWidth + gap) / (columnWidth + gap));
                setColumnCount(Math.max(1, cols));
            }
        };
        
        updateColumnCount();
        window.addEventListener('resize', updateColumnCount);
        
        return () => window.removeEventListener('resize', updateColumnCount);
    }, []);
    
    const reorderedIllustrations = reorderIllustrationsForColumns(items, columnCount);
    
    return (
        <Container pt='xl' pb='xl'>
            <Box ref={containerRef} style={{columns: '275px', gap: '16px'}}>
                {
                    reorderedIllustrations.map((item, key) => (
                            <div key={key}>{item}</div>
                    ))
                }
            </Box>
        </Container>
    )
}