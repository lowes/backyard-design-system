export interface Color {
	commerce: string;
	hover_commerce: string;
	active_commerce: string;
	hover_secondary_commerce: string;
	active_secondary_commerce: string;
	disabled: string;
	onDisabled: string;
	inverse_disabled: string;
	interactive: string;
	hover_interactive: string;
	active_interactive: string;
	hover_secondary_interactive: string;
	active_secondary_interactive: string;
	subtle: string;
	hover_subtle: string;
	active_subtle: string;
	hover_secondary_subtle: string;
	active_secondary_subtle: string;
	canvas: string;
	alt_canvas: string;
	layer_01: string;
	layer_02: string;
	alt_layer_01: string;
	alt_layer_02: string;
	overlay: string;
	hover_interface: string;
	active_interface: string;
	inverse_interface: string;
	hover_inverse_interface: string;
	link: string;
	inline_link: string;
	text_link: string;
	inverse_text_link: string;
	inverse_link: string;
	visited_link: string;
	neutral_01: string;
	neutral_02: string;
	neutral_03: string;
	neutral_04: string;
	neutral_05: string;
	neutral_06: string;
	neutral_07: string;
	neutral_08: string;
	neutral_09: string;
	neutral_10: string;
	black: string;
	white: string;
	text_primary: string;
	text_secondary: string;
	text_tertiary: string;
	text_placeholder: string;
	inverse_text_primary: string;
	inverse_text_secondary: string;
	inverse_text_tertiary: string;
	text_onColor: string;
	inverse_text_onColor: string;
	border: string;
	border_subtle: string;
	border_contrast: string;
	inverse_border: string;
	inverse_border_subtle: string;
	inverse_border_contrast: string;
	field: string;
	inverse_field: string;
	error: string;
	light_error: string;
	inverse_error: string;
	hover_error: string;
	active_error: string;
	hover_secondary_error: string;
	active_secondary_error: string;
	info: string;
	inverse_info: string;
	light_info: string;
	success: string;
	inverse_success: string;
	light_success: string;
	warning: string;
	inverse_warning: string;
	light_warning: string;
	inverse_focus: string;
	interactive_focus: string;
	focus: string;
	contrast: string;
	hover_contrast: string;
	active_contrast: string;
	hover_secondary_contrast: string;
	active_secondary_contrast: string;
	highlight: string;
	skeleton_01: string;
	skeleton_02: string;
	elevation_01: string;
	elevation_02: string;
	elevation_03: string;
	elevation_04: string;
	elevation_05: string;
	elevation_06: string;
	elevation_07: string;
	elevation_08: string;
	elevation_09: string;
	chart_01: string;
	chart_02: string;
	chart_03: string;
	chart_04: string;
	chart_05: string;
	chart_06: string;
	chart_07: string;
	brand: string;
	dark_blue: string;
	sapphire: string;
	cyan: string;
	blue: string;
	sky: string;
	light_blue: string;
	yellow: string;
	lfp_yellow: string;
	gold: string;
	lime: string;
	green: string;
	red: string;
	ruby: string;
	midnight: string;
}

export interface Radiu {
	lg: string;
	md: string;
	sm: string;
	circle: string;
}

export interface Width {
	xl: string;
	lg: string;
	md: string;
	sm: string;
}

export interface Border {
	radius: Radiu;
	width: Width;
}

export interface Container {
	max: string;
}

export interface Media_query {
	sm_min: string;
	sm_max: string;
	md_min: string;
	md_max: string;
	lg_min: string;
	lg_max: string;
	xl_min: string;
	xl_max: string;
}

export interface Gutter {
	sm: string;
	md: string;
	lg: string;
	xl: string;
}

export interface Grid {
	container: Container;
	media_query: Media_query;
	gutter: Gutter;
}

export interface Sizing {
	s1: string;
	s2: string;
	s3: string;
	s4: string;
	s5: string;
	s6: string;
	s7: string;
	s8: string;
	s9: string;
	s10: string;
	s11: string;
	s12: string;
	s13: string;
	s14: string;
	s15: string;
	s16: string;
	s17: string;
	s18: string;
	s19: string;
	s20: string;
	s21: string;
	s22: string;
}

export interface Size {
	size_0: string;
	size_1: string;
	size_2: string;
	size_3: string;
	size_4: string;
	size_5: string;
	size_6: string;
	size_7: string;
	size_8: string;
	size_10: string;
	size_12: string;
	size_14: string;
	size_16: string;
	size_18: string;
	size_20: string;
	size_24: string;
	size_28: string;
	size_30: string;
	size_32: string;
	size_36: string;
	size_40: string;
	size_44: string;
	size_48: string;
	size_52: string;
	size_56: string;
	size_60: string;
	size_64: string;
	size_68: string;
	size_72: string;
	size_76: string;
	size_80: string;
	size_84: string;
	size_88: string;
	size_92: string;
	size_96: string;
	size_112: string;
	size_128: string;
}

export interface Spacing {
	s1: string;
	s2: string;
	s3: string;
	s4: string;
	s5: string;
	s6: string;
	s7: string;
	s8: string;
	s9: string;
	s10: string;
	s11: string;
	s12: string;
	s13: string;
}

export interface Layout {
	l1: string;
	l2: string;
	l3: string;
	l4: string;
	l5: string;
	l6: string;
	l7: string;
	l8: string;
	l9: string;
	l10: string;
}

export interface Shadow {
	shadow_01: string;
	shadow_02: string;
	shadow_03: string;
	shadow_04: string;
	shadow_05: string;
	shadow_06: string;
	shadow_07: string;
	shadow_08: string;
	shadow_09: string;
}

export interface ZIndex {
	floating: number;
	overlay: number;
	drawer: number;
	modal: number;
	notification: number;
	tooltip: number;
}

export interface Helvetica {
	regular: string;
	bold: string;
}

export interface Roboto {
	regular: string;
	bold: string;
}

export interface Din {
	regular: string;
	bold: string;
}

export interface San_francisco {
	regular: string;
	bold: string;
}

export interface Font_stack {
	helvetica: Helvetica;
	roboto: Roboto;
	din: Din;
	san_francisco: San_francisco;
}

export interface Font_weight {
	regular: number;
	medium: number;
	bold: number;
}

export interface Typography {
	font_stack: Font_stack;
	font_weight: Font_weight;
}

export interface RootObject {
	name: string;
	type: string;
	color: Color;
	border: Border;
	grid: Grid;
	sizing: Sizing;
	sizes: Size;
	spacing: Spacing;
	layout: Layout;
	shadows: Shadow;
	zIndex: ZIndex;
	typography: Typography;
}