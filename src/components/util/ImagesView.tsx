import * as React from 'react';
import Box from '@mui/material/Box';
import { useAppSelector } from '../../rtk/app/hooks';
import Masonry from '@mui/lab/Masonry';

export default function ImageView() {
    const launch = useAppSelector((state) => state.launch)
    const { links } = launch.value;
    return (
        <>
            {links.flickr_images.length > 0 ? <Box sx={{ width: "100%", minHeight: 393 }}>
                <Box sx={{ width: '100%', minHeight: 529 }}>
                    <Masonry columns={3} spacing={2}>
                        {links.flickr_images.map((item, index) => (
                            <div key={index}>
                                <img
                                    src={`${item}?w=162&auto=format`}
                                    srcSet={`${item}?w=162&auto=format&dpr=2 2x`}
                                    alt={item}
                                    loading="lazy"
                                    style={{
                                        borderBottomLeftRadius: 4,
                                        borderBottomRightRadius: 4,
                                        display: 'block',
                                        width: '100%',
                                    }}
                                />
                            </div>
                        ))}
                    </Masonry>
                </Box>
            </Box>:"No Image Found"}
        </>
    );
}
