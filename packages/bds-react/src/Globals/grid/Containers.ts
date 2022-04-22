import { css } from 'styled-components'

const Containers = css`
    .grid { 
        display: grid; 
    }

    .gap {
        grid-column-gap: ${({ theme }) => theme.sizes.size_32};
    }

    .container-xs { 
        max-width: ${({ theme }) => theme.grid.breakpoint.xs.max}; 
        margin: auto;
        padding: 0 var(--bds-sizes-size-16);
    }

    .container-sm { 
        max-width: ${({ theme }) => theme.grid.breakpoint.sm.max}; 
        margin: auto;
        padding: 0 var(--bds-sizes-size-32);
    }
    
    .container-md { 
        max-width: ${({ theme }) => theme.grid.breakpoint.md.max}; 
        margin: auto;
        padding: 0 var(--bds-sizes-size-32);
    }
    
    .container-lg { 
        max-width: ${({ theme }) => theme.grid.breakpoint.lg.max}; 
        margin: auto;
        padding: 0 var(--bds-sizes-size-32);
    }
    
    .container-xl { 
        max-width: ${({ theme }) => theme.grid.breakpoint.xl.max}; 
        margin: auto;
        padding: 0 var(--bds-sizes-size-40);
    }
    
    .container-xxl { 
        max-width: ${({ theme }) => theme.grid.breakpoint.xxl.max}; 
        margin: auto;
        padding: 0 var(--bds-sizes-size-56);
    }
    
    .container-fluid { width: 100%; }
`

export default Containers
