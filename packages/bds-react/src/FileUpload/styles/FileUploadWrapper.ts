import styled, { css } from 'styled-components'

const Shapes = css`
    &.shape {
        &--rounded {
            .file-upload-dropzone {
                border-radius: var(--bds-border-radius-lg);
            }
        }

        &--squared {
            .file-upload-dropzone {
                border-radius: 0;
            }
        }
    }
`

const FileUploadWrapper = styled.div`
    .file-upload-dropzone {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: var(--bds-sizes-size-24);
        border-width: var(--bds-sizes-size-2);
        border-color: var(--bds-color-border-default);
        border-style: dashed;
        height: var(--bds-sizes-size-128);
        box-sizing: border-box;

        outline: none;

        .file-upload-dropzone-label {
            color: var(--bds-color-text-interactive);
            font-size: var(--bds-sizes-size-14);
            line-height: var(--bds-sizes-size-24);
            max-width: 10rem;
            text-align: center;
            font-family: ${({ theme }) => theme.font.family[theme.context.font]};
            font-weight: var(--bds-font-weight-regular);
        }

        /* Must apply cursor pointer to all children of dropzone */
        &,
        * {
            cursor: pointer;
        }

        &:hover,
        &.hover,
        &.drag-active {
            border-style: dashed;
            border-color: var(--bds-color-action-interactive-hover);
        }

        &:focus,
        &.focus {
            border-style: solid;
            border-color: var(--bds-color-action-interactive);
            box-shadow: 0px 0 0 2px var(--bds-color-action-interactive);
        }

        &:disabled,
        &.disabled {
            border-color: var(--bds-color-border-disabled);

            pointer-events: none;

            .file-upload-dropzone-label {
                color: var(--bds-color-text-disabled);
            }
        }
    }

    .file-upload-alert {
        margin-top: var(--bds-sizes-size-16);
    }

    .file-upload-label {
        .file-upload-heading {
            margin-bottom: var(--bds-sizes-size-16);
        }

        .file-upload-caption {
            margin-bottom: var(--bds-sizes-size-16);
        }
    }

    .file-upload-items {
        margin-top: var(--bds-sizes-size-16);
        padding-left: 0;
        position: relative;

        .file-upload-item:not(:last-child) {
            margin-bottom: var(--bds-sizes-size-8);
        }
    }

    ${Shapes}
`

export { FileUploadWrapper }

export default FileUploadWrapper
