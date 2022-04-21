import { Config } from '../types'

const config: Config = {
    interactive: [
        {
            name: 'marketing_interactive',
            description: 'Marking interactive color',
            light: {},
            dark: {
                saturation: -11,
                lightness: 15
            }
        },
        {
            name: 'text_interactive',
            description: 'Interactive text color',
            light: {},
            dark: {
                saturation: -11,
                lightness: 23
            }
        },
        {
            name: 'text_interactive_inverse',
            description: 'Inverse interactive color for high contrast elements',
            light: { 
                saturation: -11,
                lightness: 23
            },
            dark: {}
        },
        {
            name: 'icon_interactive',
            description: 'Interactive icon color',
            light: { 
                lightness: -10 
            },
            dark: {
                saturation: -11,
                lightness: 23
            }
        },
        {
            name: 'icon_interactive_inverse',
            description: 'Inverse interactive color for high contrast elements',
            light: { 
                saturation: -11,
                lightness: 23
            },
            dark: {}
        },
        {
            name: 'border_interactive',
            description: 'Interactive border color',
            light: {},
            dark: {
                saturation: -11,
                lightness: 23
            }
        },
        {
            name: 'border_interactive_inverse',
            description: 'Interactive border color for high contrast elements',
            light: {
                saturation: -11,
                lightness: 23 
            },
            dark: {}
        },
        {
            name: 'focus_interactive',
            description: 'Focus state using interactive base color',
            light: {},
            dark: {
                saturation: -11,
                lightness: 15
            }
        },
        {
            name: 'action_interactive',
            description: 'Interactive color for actionable elements',
            light: {},
            dark: {
                saturation: -11,
                lightness: 15
            }
        },
        {
            name: 'action_interactive_hover',
            description: 'hover state color for action_interactive',
            light: {
                lightness: -5
            },
            dark: {
                saturation: -11,
                lightness: 23
            }
        },
        {
            name: 'action_interactive_pressed',
            description: 'pressed state color for action_interactive',
            light: {
                lightness: -10
            },
            dark: {
                saturation: -12,
                lightness: 28
            }
        },
        {
            name: 'action_interactive_subdued',
            description: 'Subdued action interactive color',
            light: {
                lightness: 50
            },
            dark: {
                hue: -1,
                saturation: -14,
                lightness: -28,
            }
        },
        {
            name: 'action_interactive_subdued_hover',
            description: 'Interactive subdued hover state',
            light: {
                lightness: 47
            },
            dark: {
                hue: -1,
                saturation: -12,
                lightness: -26,
            }
        },
        {
            name: 'action_interactive_subdued_pressed',
            description: 'Interactive subdued pressed state',
            light: {
                lightness: 45
            },
            dark: {
                hue: -1,
                saturation: -10,
                lightness: -25,
            }
        },
        {
            name: 'highlight',
            description: 'Highlight color',
            light: {
                hue: 7,
                saturation: -31,
                lightness: 52
            },
            dark: {
                hue: 7,
                saturation: 16,
                lightness: -30,
            }
        },
    ],
    dark_blue: [
        {
            name: 'marketing_dark_blue',
            description: 'Marketing dark blue color',
            light: {},
            dark: {
                saturation: -17,
                lightness: 10
            }
        },
        {
            name: 'surface_dark_blue',
            description: 'Dark blue surface color',
            light: {},
            dark: {
                saturation: -17,
                lightness: 10
            }
        },
        {
            name: 'surface_dark_blue_subdued',
            description: 'Subdued dark blue surface color',
            light: {
                saturation: -73,
                lightness: 71
            },
            dark: {
                hue: -1,
                saturation: -43,
                lightness: -3
            }
        },
        {
            name: 'surface_dark_blue_inverse',
            description: 'Inverse dark blue color for high contrast elements',
            light: {
                saturation: -17,
                lightness: 10
            },
            dark: { }
        },
        {
            name: 'surface_dark_blue_subdued_inverse',
            description: 'Inverse and subdued dark blue color for high contrast elements',
            light: {
                hue: -1,
                saturation: -43,
                lightness: -3
            },
            dark: {
                saturation: -73,
                lightness: 71
            }
        }, 
    ],
    blue: [
        {
            name: 'marketing_blue',
            description: 'Marketing blue color',
            light: {},
            dark: {
                saturation: -22,
                lightness: -17
            }
        },
        {
            name: 'surface_blue',
            description: 'Blue surface color',
            light: {},
            dark: {
                saturation: -22,
                lightness: 17
            }
        },
        {
            name: 'surface_blue_subdued',
            description: 'Subdued blue surface color',
            light: {
                saturation: -21,
                lightness: 50
            },
            dark: {
                hue: 11,
                lightness: -31
            }
        },
        {
            name: 'surface_blue_inverse',
            description: 'Blue surface color for high contrast',
            light: {
                saturation: -22,
                lightness: 17
            },
            dark: {}
        },
        {
            name: 'surface_blue_subdued_inverse',
            description: 'Subdued blue surface color for high contrast',
            light: {
                hue: 1,
                lightness: -31
            },
            dark: {
                saturation: -21,
                lightness: 50
            }
        },         
    ],
    light_blue: [
        {
            name: 'marketing_light_blue',
            description: 'Marketing light blue color',
            light: {},
            dark: {
                saturation: -2,
                lightness: 8
            }
        },
        {
            name: 'surface_light_blue',
            description: 'Light blue surface color',
            light: {},
            dark: {
                saturation: -2,
                lightness: 8
            }
        },
        {
            name: 'surface_light_blue_subdued',
            description: 'Subdued light blue surface color',
            light: {
                hue: -1,
                saturation: -2,
                lightness: 22
            },
            dark: {
                hue: 7,
                saturation: 31,
                lightness: -66 
            }
        },
        {
            name: 'surface_light_blue_inverse',
            description: 'Light blue surface color for high contrast',
            light: {
                saturation: -2,
                lightness: 8
            },
            dark: {
                saturation: -2
            }
        },
        {
            name: 'surface_light_blue_subdued_inverse',
            description: 'Light blue surface color for high contrast',
            light: {
                hue: 7,
                saturation: 312,
                lightness: -66
            },
            dark: {
                hue: -1,
                saturation: -2,
                lightness: 22
            }
        },

    ],
    green: [
        {
            name: 'marketing_green',
            description: 'Marketing green color',
            light: {},
            dark: {
                saturation: -63,
                lightness: 13
            }
        },
        {
            name: 'text_green',
            description: 'Green text color',
            light: { 
                saturation: -14,
                lightness: -7
            },
            dark: {
                saturation: -63,
                lightness: 13
            }
        },
        {
            name: 'text_green_inverse',
            description: 'Inverse green text color',
            light: { 
                saturation: -63,
                lightness: 20
            },
            dark: {
                saturation: -14,
                lightness: -7
            }
        },
        {
            name: 'icon_green',
            description: 'Green icon color',
            light: { 
                saturation: -14,
                lightness: -7
            },
            dark: {
                saturation: -63,
                lightness: 13
            }
        },
        {
            name: 'icon_green_inverse',
            description: 'Inverse green icon color',
            light: { 
                saturation: -63,
                lightness: 20
            },
            dark: {
                saturation: -14,
                lightness: -7
            }
        },
        {
            name: 'border_green',
            description: 'Green border color',
            light: { 
                saturation: -14,
                lightness: -7
            },
            dark: {
                saturation: -63,
                lightness: 20
            }
        },
        {
            name: 'border_green_inverse',
            description: 'Green border color for high contrast',
            light: { 
                saturation: -63,
                lightness: 20
            },
            dark: {
                saturation: -14,
                lightness: -7
            }
        },
        {
            name: 'surface_green',
            description: 'Green surface color',
            light: {},
            dark: {
                saturation: -63,
                lightness: 13
            }
        },
        {
            name: 'surface_green_subdued',
            description: 'subdued green surface color',
            light: {
                 hue: -1,
                 saturation: -39,
                 lightness: 55
            },
            dark: {
                hue: 24,
                saturation: -58,
                lightness: -15
            }
        },
        {
            name: 'surface_green_inverse',
            description: 'Green surface color for high contrast',
            light: {
                saturation: -63,
                lightness: 13
            },
            dark: {}
        },
        {
            name: 'surface_green_subdued_inverse',
            description: 'subdued green surface color for high contrast',
            light: { 
                hue: 24,
                saturation: -58,
                lightness: -15
            },
            dark: {
                hue: -1,
                saturation: -39,
                lightness: 55
            }
        },
        {
            name: 'action_green',
            description: 'Action green color',
            light: {
                saturation: -14,
                lightness: -7 
            },
            dark: {
                saturation: -63,
                lightness: 13
            }
        },
        {
            name: 'action_green_hover',
            description: 'Action green color hover',
            light: {
                saturation: -8,
                lightness: -12 
            },
            dark: {
                saturation: -63,
                lightness: 20
            }
        },
        {
            name: 'action_green_pressed',
            description: 'Action green color pressed',
            light: {
                saturation: -8,
                lightness: -17 
            },
            dark: {
                saturation: -63,
                lightness: 25
            }
        },
        {
            name: 'action_green_subdued',
            description: 'Action green color subdued',
            light: {
                hue: -1,
                saturation: -39,
                lightness: 59  
            },
            dark: {
                hue: 53,
                saturation: -45,
                lightness: -24
            }
        },
        {
            name: 'action_green_subdued_hover',
            description: 'Action green color subdued hover',
            light: {
                saturation: -39,
                lightness: 56
            },
            dark: {
                hue: 53,
                saturation: -44,
                lightness: -22
            }
        },
        {
            name: 'action_green_subdued_pressed',
            description: 'Action green color subdued pressed',
            light: {
                hue: -1,
                saturation: -39,
                lightness: 52
            },
            dark: {
                hue: 53,
                saturation: -42,
                lightness: -21
            }
        },
    ],
    red: [
        {
            name: 'marketing_red',
            description: 'Marketing red color',
            light: {},
            dark: {
                saturation: -33,
                lightness: 29
            }
        },
        {
            name: 'text_red',
            description: 'Red text color',
            light: {},
            dark: {
                saturation: -33,
                lightness: 29
            }
        },
        {
            name: 'text_red_inverse',
            description: 'Inverse red text color',
            light: {
                hue: -1,
                saturation: -33,
                lightness: 36
            },
            dark: {}
        },
        {
            name: 'icon_red',
            description: 'red icon color',
            light: {},
            dark: {
                saturation: -33,
                lightness: 29
            }
        },
        {
            name: 'icon_red_inverse',
            description: 'Inverse red icon color',
            light: {
                hue: -1,
                saturation: -33,
                lightness: 36
            },
            dark: {}
        },
        {
            name: 'border_red',
            description: 'Red border color',
            light: {},
            dark: {
                saturation: -33,
                lightness: 29
            }
        },
        {
            name: 'border_red_inverse',
            description: 'Red border color for high contrast',
            light: {
                hue: -1, 
                saturation: -33,
                lightness: 36
            },
            dark: {}
        },
        {
            name: 'surface_red',
            description: 'Red surface color',
            light: {},
            dark: {
                saturation: -33,
                lightness: 29
            }
        },
        {
            name: 'surface_red_subdued',
            description: 'subdued red surface color',
            light: {
                 saturation: -40,
                 lightness: 61
            },
            dark: {
                hue: -2,
                saturation: -12,
                lightness: -24
            }
        },
        {
            name: 'surface_red_inverse',
            description: 'Red surface color',
            light: {
                hue: 7,
                saturation: -7,
                lightness: 33
            },
            dark: {}
        },
        {
            name: 'surface_red_subdued_inverse',
            description: 'subdued red surface color',
            light: {
                 hue: -7,
                 saturation: -12,
                 lightness: -11
            },
            dark: {
                saturation: -40,
                lightness: 61
            }
        },
        {
            name: 'action_red',
            description: 'Action red color',
            light: {},
            dark: {
                saturation: -33,
                lightness: 29
            }
        },
        {
            name: 'action_red_hover',
            description: 'Action red color hover',
            light: {
                hue: -1,
                saturation: 1,
                lightness: -3 
            },
            dark: {
                saturation: -33,
                lightness: 23
            }
        },
        {
            name: 'action_red_pressed',
            description: 'Action red color pressed',
            light: {
                lightness: -8
            },
            dark: {
                hue: -1,
                saturation: -33,
                lightness: 16
            }
        },
        {
            name: 'action_red_subdued',
            description: 'Action red color subdued',
            light: {
                saturation: -40,
                lightness: 61
            },
            dark: {
                hue: -2,
                saturation: -12,
                lightness: -24
            }
        },
        {
            name: 'action_red_subdued_hover',
            description: 'Action red color subdued hover',
            light: {
                hue: 1,
                saturation: -34,
                lightness: 59
            },
            dark: {
                hue: -2,
                saturation: -12,
                lightness: -21
            }
        },
        {
            name: 'action_red_subdued_pressed',
            description: 'Action red color subdued pressed',
            light: {
                saturation: -34,
                lightness: 56
            },
            dark: {
                hue: -2,
                saturation: -12,
                lightness: -19
            }
        },
    ],
    gold: [
        {
            name: 'marketing_gold',
            description: 'Marketing gold color',
            light: {},
            dark: {
                lightness: 13
            }
        },
        {
            name: 'surface_gold',
            description: 'Gold surface color',
            light: {},
            dark: {
                lightness: 13
            }
        },
        {
            name: 'surface_gold_subdued',
            description: 'Gold surface subdued color',
            light: {
                saturation: 1,
                lightness: 33
            },
            dark: {
                saturation: -64,
                lightness: -19
            }
        },
        {
            name: 'surface_gold_inverse',
            description: 'Gold surface color',
            light: {
                lightness: 13
            },
            dark: {}
        },
        {
            name: 'surface_gold_subdued_inverse',
            description: 'Gold surface subdued color',
            light: {
                saturation: -64,
                lightness: -19
            },
            dark: {
                saturation: 1,
                lightness: 33
            }
        },
    ],
    lfp_yellow: [
        {
            name: 'marketing_lfp_yellow',
            description: 'Marketing lfp yellow color',
            light: {},
            dark: {}
        }
    ],
    white: [
        {
            name: 'text_solid_inverse',
            description: 'Solid white text for high contrast elements or primary buttons',
            light: {},
            dark: {
                lightness: -100
            }
        },
        {
            name: 'text_primary_inverse',
            description: 'Primary text for high contrast elements',
            light: {
                alpha: 87
            },
            dark: {
                lightness: -100,
                alpha: 87
            }
        },
        {
            name: 'text_secondary_inverse',
            description: 'Secondary text for high contrast elements',
            light: {
                alpha: 70
            },
            dark: {
                lightness: -100,
                alpha: 70
            }
        },
        {
            name: 'text_tertiary_inverse',
            description: 'Tertiary text for high contrast elements',
            light: {
                alpha: 60
            },
            dark: {
                lightness: -100,
                alpha: 60
            }
        },
        {
            name: 'text_disabled_inverse',
            description: 'Disabled text for high contrast elements',
            light: {
                alpha: 30
            },
            dark: {
                lightness: -100,
                alpha: 30
            }
        },
        {
            name: 'icon_solid_inverse',
            description: 'Solid white icon for high contrast elements or primary buttons',
            light: {},
            dark: {
                lightness: -100
            }
        },
        {
            name: 'icon_primary_inverse',
            description: 'Primary icon for high contrast elements',
            light: {
                alpha: 87
            },
            dark: {
                lightness: -100,
                alpha: 87
            }
        },
        {
            name: 'icon_secondary_inverse',
            description: 'Secondary icon for high contrast elements',
            light: {
                alpha: 70
            },
            dark: {
                lightness: -100,
                alpha: 70
            }
        },
        {
            name: 'icon_tertiary_inverse',
            description: 'Tertiary icon for high contrast elements',
            light: {
                alpha: 60
            },
            dark: {
                lightness: -100,
                alpha: 60
            }
        },
        {
            name: 'icon_disabled_inverse',
            description: 'Disabled icon for high contrast elements',
            light: {
                alpha: 30
            },
            dark: {
                lightness: -100,
                alpha: 30
            }
        },
        {
            name: 'border_default_inverse',
            description: 'Default border for high contrast elements',
            light: {
                alpha: 44
            },
            dark: {
                lightness: -100,
                alpha: 44
            }
        },
        {
            name: 'border_hover_inverse',
            description: 'Default border for high contrast elements',
            light: {
                alpha: 52
            },
            dark: {
                lightness: -100,
                alpha: 52
            }
        },
        {
            name: 'border_pressed_inverse',
            description: 'Default border for high contrast elements',
            light: {
                alpha: 60
            },
            dark: {
                lightness: -100,
                alpha: 60
            }
        },
        {
            name: 'border_subdued_inverse',
            description: 'Default border for high contrast elements',
            light: {
                alpha: 12
            },
            dark: {
                lightness: -100,
                alpha: 12
            }
        },
        {
            name: 'border_contrast_inverse',
            description: 'Default border for high contrast elements',
            light: {
                alpha: 90
            },
            dark: {
                lightness: -100,
                alpha: 90
            }
        },
        {
            name: 'border_disabled_inverse',
            description: 'Default border for high contrast elements',
            light: {
                alpha: 30
            },
            dark: {
                lightness: -100,
                alpha: 30
            }
        },
        {
            name: 'focus_inverse',
            description: 'Inverse focus state',
            light: {},
            dark: {
                hue: 221,
                saturation: 100,
                lightness: -94
            }
        },
        {
            name: 'surface_default',
            description: 'Default surface color',
            light: {},
            dark: {
                hue: 221,
                saturation: 100,
                lightness: -94
            }
        },
        {
            name: 'surface_default_inverse',
            description: 'Inverse of default surface color',
            light: {
                hue: 221,
                saturation: 100,
                lightness: -94
            },
            dark: {}
        },
        {
            name: 'surface_subdued',
            description: 'Alternate default surface color',
            light: {
                lightness: -4
            },
            dark: {
                hue: 222,
                saturation: 54,
                lightness: -89
            }
        },
        {
            name: 'elevation_01',
            description: 'First level of elevation',
            light: {},
            dark: {
                hue: 223,
                saturation: 66,
                lightness: -91
            }
        },
        {
            name: 'elevation_02',
            description: 'Second level of elevation',
            light: {},
            dark: {
                hue: 222,
                saturation: 54,
                lightness: -89
            }
        },
        {
            name: 'elevation_03',
            description: 'Third level of elevation',
            light: {},
            dark: {
                hue: 222,
                saturation: 45,
                lightness: -87
            }
        },
        {
            name: 'elevation_04',
            description: 'Fourth level of elevation',
            light: {},
            dark: {
                hue: 221,
                saturation: 39,
                lightness: -85
            }
        },
        {
            name: 'elevation_05',
            description: 'Fifth level of elevation',
            light: {},
            dark: {
                hue: 221,
                saturation: 34,
                lightness: -83
            }
        },
        {
            name: 'elevation_06',
            description: 'Sixth level of elevation',
            light: {},
            dark: {
                hue: 221,
                saturation: 30,
                lightness: -82
            }
        },
        {
            name: 'action_neutral',
            description: 'Default action color',
            light: {
                lightness: -4
            },
            dark: {
                hue: 222,
                saturation: 54,
                lightness: -94
            }
        },
        {
            name: 'action_neutral_hover',
            description: 'Default action hover color',
            light: {
                lightness: -6
            },
            dark: {
                hue: 222,
                saturation: 45,
                lightness: -87
            }
        },
        {
            name: 'action_neutral_pressed',
            description: 'Default action pressed color',
            light: {
                lightness: -8
            },
            dark: {
                hue: 223,
                saturation: 31,
                lightness: -82
            }
        },
        {
            name: 'white',
            description: 'White color',
            light: {},
            dark: {}
        },
    ],
    black: [
        {
            name: 'black',
            description: 'Solid black color',
            light: {},
            dark: {}
        },
        {
            name: 'text_solid',
            description: 'Solid black text',
            light: {},
            dark: {
                lightness: 100
            }
        },
        {
            name: 'text_primary',
            description: 'Primary text color',
            light: {
                alpha: 87
            },
            dark: {
                lightness: 100,
                alpha: 87
            }
        },
        {
            name: 'text_secondary',
            description: 'Secondary text color',
            light: {
                alpha: 70
            },
            dark: {
                lightness: 100,
                alpha: 70
            }
        },
        {
            name: 'text_tertiary',
            description: 'Tertiary text color',
            light: {
                alpha: 60
            },
            dark: {
                lightness: 100,
                alpha: 60
            }
        },
        {
            name: 'text_disabled',
            description: 'Disabled text color',
            light: {
                alpha: 30
            },
            dark: {
                lightness: 100,
                alpha: 30
            }
        },
        {
            name: 'icon_solid',
            description: 'Solid black icon',
            light: {},
            dark: {
                lightness: 100
            }
        },
        {
            name: 'icon_primary',
            description: 'Primary icon color',
            light: {
                alpha: 87
            },
            dark: {
                lightness: 100,
                alpha: 87
            }
        },
        {
            name: 'icon_secondary',
            description: 'Secondary icon color',
            light: {
                alpha: 70
            },
            dark: {
                lightness: 100,
                alpha: 70
            }
        },
        {
            name: 'icon_tertiary',
            description: 'Tertiary icon color',
            light: {
                alpha: 60
            },
            dark: {
                lightness: 100,
                alpha: 60
            }
        },
        {
            name: 'icon_disabled',
            description: 'Disabled icon color',
            light: {
                alpha: 30
            },
            dark: {
                lightness: 100,
                alpha: 30
            }
        },
        {
            name: 'border_default',
            description: 'Defaut border color',
            light: {
                lightness: 44
            },
            dark: {
                hue: 220,
                saturation: 7,
                lightness: 47,
            }
        },
        {
            name: 'border_hover',
            description: 'Defaut border hover color',
            light: {
                lightness: 52
            },
            dark: {
                hue: 221,
                saturation: 7,
                lightness: 55,
            }
        },
        {
            name: 'border_pressed',
            description: 'Defaut border pressed color',
            light: {
                lightness: 60
            },
            dark: {
                hue: 222,
                saturation: 7,
                lightness: 63
            }
        },
        {
            name: 'border_subdued',
            description: 'Defaut border subdued color',
            light: {
                alpha: 12
            },
            dark: {
                lightness: 100,
                alpha: 12
            }
        },
        {
            name: 'border_contrast',
            description: 'Defaut border contrast color',
            light: {
                alpha: 90
            },
            dark: {
                lightness: 100,
                alpha: 90
            }
        },
        {
            name: 'border_disabled',
            description: 'disabled border color',
            light: {
                lightness: 70
            },
            dark: {
                hue: 222,
                saturation:13,
                lightness: 34
            }
        },
        {
            name: 'focus_default',
            description: 'Default focus state color',
            light: {
                lightness: 55
            },
            dark: {
                lightness: 44
            }
        },
        {
            name: 'neutral_01',
            description: 'Neutral 01 color',
            light: {
                lightness: 96
            },
            dark: {
                lightness: 9
            }
        },
        {
            name: 'neutral_02',
            description: 'Neutral 02 color',
            light: {
                lightness: 88
            },
            dark: {
                lightness: 15
            }
        },
        {
            name: 'neutral_03',
            description: 'Neutral 03 color',
            light: {
                lightness: 78
            },
            dark: {
                lightness: 22
            }
        },
        {
            name: 'neutral_04',
            description: 'Neutral 04 color',
            light: {
                lightness: 66
            },
            dark: {
                lightness: 32
            }
        },
        {
            name: 'neutral_05',
            description: 'Neutral 04 color',
            light: {
                lightness: 55
            },
            dark: {
                lightness: 44
            }
        },
        {
            name: 'neutral_06',
            description: 'Neutral 06 color',
            light: {
                lightness: 44
            },
            dark: {
                lightness: 55
            }
        },
        {
            name: 'neutral_07',
            description: 'Neutral 08 color',
            light: {
                lightness: 32
            },
            dark: {
                lightness: 66
            }
        },
        {
            name: 'neutral_08',
            description: 'Neutral 08 color',
            light: {
                lightness: 22
            },
            dark: {
                lightness: 78
            }
        },
        {
            name: 'neutral_09',
            description: 'Neutral 09 color',
            light: {
                lightness: 15
            },
            dark: {
                lightness: 88
            }
        },
        {
            name: 'neutral_10',
            description: 'Neutral 10 color',
            light: {
                lightness: 9
            },
            dark: {
                lightness: 96
            }
        },
        {
            name: 'skeleton_01',
            description: 'Skeleton 01 color',
            light: {
                lightness: 90
            },
            dark: {
                lightness: 21
            }
        },
        {
            name: 'skeleton_02',
            description: 'Skeleton 02 color',
            light: {
                lightness: 78
            },
            dark: {
                lightness: 32
            }
        },
        {
            name: 'overlay',
            description: 'Overlay color',
            light: {
                alpha: 60
            },
            dark: {
                lightness: 100,
                alpha: 20
            }
        }
    ],
    purple: [
        {
            name: 'text_visited_link',
            description: 'Text color for visited links',
            light: {},
            dark: {
                hue: -1,
                saturation: 3,
                lightness: 21
            }
        }, 
    ]
}

export { config }
export default config