import React from 'react'
import { withKnobs, select, number, boolean } from '@storybook/addon-knobs'
import { ApiLink } from '../utils/storybook/ApiLink'
import {
    GridV3 as Grid,
    Gallery,
    GalleryProvider,
    GalleryThumbnailGroup,
    GalleryViewport,
    Modal,
    ModalHeader,
    ModalBody,
    FormControl,
    FormHeading,
    GallerySkeleton,
} from '../'

export default { title: '@lowes-tech/bds-react/Gallery', decorators: [withKnobs] }

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

const maxThumbnails = [
    'maxThumbnails',
    {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '20': 20,
    },
    4,
] as const

export const DefaultGallery = () => (
    <Grid.Column start={6} end={12}>
        <Gallery
            shape={select(...shapes)}
            items={[
                {
                    original:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=pdhi',
                    thumbnail:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=mthb',
                },
                {
                    original:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=pdhi',
                    thumbnail:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=mthb',
                },
                {
                    original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1500x1000/00FF00/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1000x1500/FF0000/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1500/999999/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/999999/FFFFFF?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1500/FF00FF/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1500/FFFF00/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Thumb',
                },
            ]}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const DisableThumbnails = () => (
    <Grid.Column start={6} end={12}>
        <Gallery
            disableThumbnails
            shape={select(...shapes)}
            items={[
                {
                    original:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=pdhi',
                    thumbnail:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=mthb',
                },
                {
                    original:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=pdhi',
                    thumbnail:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=mthb',
                },
                {
                    original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1500x1000/00FF00/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1000x1500/FF0000/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1500/999999/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/999999/FFFFFF?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1500/FF00FF/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1500/FFFF00/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Thumb',
                },
            ]}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const DisableNavigation = () => (
    <Grid.Column start={6} end={12}>
        <Gallery
            disableNavigation
            shape={select(...shapes)}
            items={[
                {
                    original:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=pdhi',
                    thumbnail:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=mthb',
                },
                {
                    original:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=pdhi',
                    thumbnail:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=mthb',
                },
                {
                    original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1500x1000/00FF00/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1000x1500/FF0000/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1500/999999/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/999999/FFFFFF?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1500/FF00FF/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Thumb',
                },
                {
                    original: 'https://via.placeholder.com/1500/FFFF00/FFFFFF?text=Original',
                    thumbnail: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Thumb',
                },
            ]}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

const loadScript = (() => {
    const loadApiInstance = (src) => {
        const promise = new Promise((resolve, reject) => {
            const script = document.createElement('script')
            script.src = src

            script.addEventListener(
                'load',
                () => {
                    resolve(script)
                },
                false,
            )

            script.addEventListener(
                'error',
                () => {
                    reject(script)
                },
                false,
            )

            document.head.appendChild(script)
        })
        return promise
    }
    let instance = null
    return {
        getInstance: (src) => {
            instance = loadApiInstance(src)
            return instance
        },
    }
})()

const VideoThumbnailOverlay = () => (
    <div
        style={{
            position: 'absolute',
            left: '4px',
            right: '4px',
            top: '4px',
            bottom: '4px',
        }}
    >
        <svg viewBox="0 0 160 160">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-299.000000, -935.000000)">
                    <g transform="translate(299.000000, 935.000000)">
                        <g fill="#000000" fillOpacity="0.54">
                            <circle cx="80" cy="80" r="80"></circle>
                        </g>
                        <circle
                            stroke="#FFFFFF"
                            strokeWidth="5"
                            cx="80"
                            cy="80"
                            r="30.9333333"
                        ></circle>
                        <polygon
                            fill="#FFFFFF"
                            points="71.4666667 68.2666667 71.4666667 92.8 93.8666667 80.5333333"
                        ></polygon>
                    </g>
                </g>
            </g>
        </svg>
    </div>
)

const VideoViewer = ({ data, playerSize, autoPlay = '0' }) => {
    React.useEffect(() => {
        const playVideoViewer = (videoViewers) => {
            const videoelement = document.getElementById('s7_videoview_container')
            if (videoelement) {
                videoelement.parentNode.removeChild(videoelement)
            }
            const videoVs = new videoViewers.VideoViewer({
                containerId: 's7_videoview',
                params: {
                    asset: `Lowes/${data.videoLink}`,
                    stagesize: playerSize,
                    autoplay: autoPlay,
                    serverurl: 'https://lda.lowes.com/is/image/',
                    contenturl: 'https://lda.lowes.com/skins/',
                    config: 'Scene7SharedAssets/Universal_HTML5_Video',
                    emailurl: 'https://lda.lowes.com/s7/emailFriend',
                    videoserverurl: 'https://lda.lowes.com/is/content/',
                },
            })
            videoVs.init()
        }

        loadScript
            .getInstance('https://lda.lowes.com/s7viewers/html5/js/VideoViewer.js')
            .then(() => {
                playVideoViewer((window as any).s7viewers)
            })
    }, [data, playerSize])
    return (
        <div className="spinvview">
            <div id="s7_videoview" />
        </div>
    )
}

export const CustomGalleryItems = () => (
    <Grid.Column start={6} end={12}>
        <Gallery
            shape={select(...shapes)}
            items={[
                {
                    original:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=pdhi',
                    thumbnail:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=mthb',
                    renderViewportItem: (props, ref) => (
                        <div
                            style={{
                                position: 'absolute',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                left: '0',
                                top: '0',
                                right: '0',
                                bottom: '0',
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            }}
                        >
                            <VideoViewer
                                data={{
                                    videoLink: '883049354699_video_01-AVS',
                                }}
                                playerSize="375,375"
                            />
                        </div>
                    ),
                    renderThumbnail: ({ src, alt }, ref) => (
                        <>
                            <img src={src} alt={alt} />
                            <VideoThumbnailOverlay />
                        </>
                    ),
                },
                {
                    original:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=pdhi',
                    thumbnail:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=mthb',
                },
                {
                    original:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=pdhi',
                    thumbnail:
                        'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=mthb',
                },
            ]}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const CustomGalleryLayout = () => (
    <Grid.Column start={6} end={12}>
        <Modal size="auto">
            <ModalHeader>Gallery Example</ModalHeader>
            <ModalBody style={{ paddingRight: '1rem', maxHeight: '40rem' }}>
                <GalleryProvider
                    shape={select(...shapes)}
                    items={[
                        {
                            original:
                                'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=pdhi',
                            thumbnail:
                                'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=mthb',
                            renderViewportItem: (props, ref) => (
                                <div
                                    style={{
                                        position: 'absolute',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        left: '0',
                                        top: '0',
                                        right: '0',
                                        bottom: '0',
                                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                    }}
                                >
                                    <VideoViewer
                                        data={{
                                            videoLink: '883049354699_video_01-AVS',
                                        }}
                                        playerSize="375,375"
                                    />
                                </div>
                            ),
                            renderThumbnail: ({ src, alt }, ref) => (
                                <>
                                    <img src={src} alt={alt} />
                                    <VideoThumbnailOverlay />
                                </>
                            ),
                        },
                        {
                            original:
                                'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=pdhi',
                            thumbnail:
                                'http://mobileimages.lowes.com/product/converted/883049/883049354699.jpg?size=mthb',
                        },
                        {
                            original:
                                'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=pdhi',
                            thumbnail:
                                'http://mobileimages.lowes.com/product/converted/883049/883049354699_09528427.jpg?size=mthb',
                        },
                        {
                            original:
                                'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
                            thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb',
                        },
                        {
                            original:
                                'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
                            thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb',
                        },
                        {
                            original:
                                'https://via.placeholder.com/1500x1000/00FF00/FFFFFF?text=Original',
                            thumbnail: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Thumb',
                        },
                        {
                            original:
                                'https://via.placeholder.com/1000x1500/FF0000/FFFFFF?text=Original',
                            thumbnail: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Thumb',
                        },
                        {
                            original:
                                'https://via.placeholder.com/1500/999999/FFFFFF?text=Original',
                            thumbnail: 'https://via.placeholder.com/150/999999/FFFFFF?text=Thumb',
                        },
                        {
                            original:
                                'https://via.placeholder.com/1500/FF00FF/FFFFFF?text=Original',
                            thumbnail: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Thumb',
                        },
                        {
                            original:
                                'https://via.placeholder.com/1500/FFFF00/FFFFFF?text=Original',
                            thumbnail: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Thumb',
                        },
                    ]}
                >
                    <Grid.Row>
                        <Grid.Column
                            style={{
                                width: '6rem',
                            }}
                        >
                            <GalleryThumbnailGroup
                                disableMobile={boolean('disableMobile', false)}
                                maxThumbnails={select(...maxThumbnails)}
                                direction="column"
                                style={{ maxHeight: '32rem' }}
                            />
                        </Grid.Column>
                        <Grid.Column />
                        <Grid.Column start={6} end={12}>
                            <GalleryViewport />
                        </Grid.Column>
                    </Grid.Row>
                </GalleryProvider>
            </ModalBody>
        </Modal>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Gallery Skeleton</FormHeading>
            <br />
            <GallerySkeleton
                animate={boolean('Animate', false)}
                hideButtons={boolean('Hide Buttons', false)}
                thumbnails={number('Thumbnails', 5)}
            />
        </FormControl>
    </Grid.Column>
)
