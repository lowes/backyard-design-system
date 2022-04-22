import styled from 'styled-components'

const GalleryThumbnailGroupWrapper = styled.div`
    &&&& {
        display: flex;
        justify-content: center;
        
        margin-left: var(--bds-sizes-size-16);
        
        .gallery-thumbnail-group {
            display: flex;

            &.mobile {
                justify-content: center;
            }

            &.desktop {
                justify-content: flex-start;
            }

            width: 100%;
            margin: 0;

            .gallery-thumbnail {
                margin: 0;

                padding-top: var(--bds-sizes-size-16);
                padding-left: var(--bds-sizes-size-4);
                padding-right: var(--bds-sizes-size-4);
            }

            &.mobile .gallery-thumbnail {
                padding-top: var(--bds-sizes-size-24);
            }
        }
    }
`

export { GalleryThumbnailGroupWrapper }

export default GalleryThumbnailGroupWrapper
