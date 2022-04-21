import * as React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import SearchIcon from '@lowes-tech/bds-icons/SearchIcon'
import Close from '@lowes-tech/bds-icons/Close'

import TextInput from '../TextInput'
import IconButton from '../IconButton'
import type { TextInputProps, TextInputRef } from '../TextInput'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import useForwardedRef from '../utils/hooks/useForwardedRef'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import { SearchBase } from './styles/SearchBase'
import { SearchButtonGroup } from './styles/SearchButtonGroup'

/**
 * Extend `TextInput` with Search styles
 */
const StyledTextInput = styled(TextInput)`
    ${SearchBase}
` as typeof TextInput

/**
 * Backyard React Search
 *
 * Search text input that extends on `TextInput`
 *
 *  <Search placeholder="Search" />
 *
 * To include helper text, use `FormControl` and `FormHelperText` to sync states
 *
 *  <FormControl>
 *      <Search placeholder="Username" />
 *      <FormHelperText>Search by username</FormHelperText>
 *  </FormControl>
 */

const Search: BDSForwardRef<SearchProps> = React.forwardRef<SearchRef, SearchProps>(function Search(
    {
        className,
        disabled,
        size,
        onSearchClick,
        onClearClick,
        onChange,
        label, // Remove `label` from props, use `placeholder` instead
        placeholder,
        shape: shapeProp, // = 'rounded',
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'Search',
    }).context

    const [active, setActive] = React.useState(false)

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    // Hold ref to get event target
    const innerRef = useForwardedRef(ref)

    /**
     * Force event.target to `innerRef`, the text `input`
     *
     * @param {Event} event - DOM Event
     */
    function getEvent<E>(event: E) {
        return event
    }

    /**
     * Handles `onClick` for Search icon
     *
     * @param {Event} event - DOM Event
     */
    const handleSubmit = (event) => {
        // If `onSearchClick` defined,
        if (typeof onSearchClick === 'function') {
            // Trigger function
            onSearchClick(getEvent(event), innerRef.current.value)
        }
    }

    /**
     * Handles `onClick` for Clear icon
     *
     * @param {Event} event - DOM Event
     */
    const handleClear = (event) => {
        // Set new clear count...
        innerRef.current.value = ''
        // @ts-ignore
        setActive(false)

        // If `onClearClick` defined,
        if (typeof onClearClick === 'function') {
            // Trigger function
            onClearClick(getEvent(event), innerRef.current.value)
        }
    }

    // eslint-disable-next-line no-shadow
    const handleChange = (event: React.ChangeEvent, value: string) => {
        setActive(true)
        if (onChange) {
            onChange(event, value)
        }
    }

    const getIconButtonSize = (componentSize: string) => {
        switch (componentSize) {
            case 'jumbo':
                return 'large'
            case 'large':
                return 'medium'
            case 'medium':
                return 'small'
            case 'small':
                return 'extra_small'
            default:
                return 'small'
        }
    }

    /**
     * Layout:
     *
     *  <TextInput />
     */
    return (
        <StyledTextInput
            disabled={disabled}
            placeholder={placeholder}
            className={classNames('input--search', className)}
            type="text"
            size={size}
            itemAfter={
                !disabled ? (
                    <SearchButtonGroup className={`size--${size}`}>
                        {active ? (
                            <React.Fragment>
                                <IconButton
                                    className={classNames('search--clear', 'btn--clear')}
                                    variant="ghost"
                                    color="neutral"
                                    size={getIconButtonSize(size)}
                                    onClick={handleClear}
                                >
                                    <Close />
                                </IconButton>
                                <span className="divider" />
                            </React.Fragment>
                        ) : null}
                        <IconButton
                            className="search--action"
                            variant="ghost"
                            color="neutral"
                            size={getIconButtonSize(size)}
                            onClick={handleSubmit}
                        >
                            <SearchIcon />
                        </IconButton>
                    </SearchButtonGroup>
                ) : null
            }
            onChange={handleChange}
            shape={shape}
            {...props}
            ref={innerRef}
        />
    )
})

type SearchRef = TextInputRef

interface SearchProps extends TextInputProps {
    /**
     * Children
     */
    children?: React.ReactNode
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Whether or not input is disabled
     */
    disabled?: boolean
    /**
     * Default value of input
     */
    defaultValue?: string
    /**
     * When Search icon is clicked... trigger function
     */
    onSearchClick?: (event: React.MouseEvent, value: string) => void
    /**
     * When Clear icon is clicked... trigger function
     */
    onClearClick?: (event: React.MouseEvent, value: string) => void
    /**
     * Defines fill color
     * Only useful for `filled` variant
     */
    fill?: string | boolean
    /**
     * Placeholder value for Search input
     */
    placeholder?: string
    /**
     * Display variant of text input
     */
    variant?: 'outlined' | 'filled'
    /**
     * Visual shape of text input
     */
    shape?: 'rounded' | 'squared'
    /**
     * Type of text input
     */
    type?: string
}

Search.bdsName = 'Search'

export { Search }

export { SearchProps, SearchRef }

export default Search
