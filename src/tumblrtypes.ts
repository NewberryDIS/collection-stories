export interface Blog {
  name: string;
  title: string;
  description: string;
  url: string;
  uuid: string;
  updated: number;
  tumblrmart_accessories: Record<string, unknown>;
  can_show_badges: boolean;
}

export interface Theme {
  header_full_width: number;
  header_full_height: number;
  header_focus_width: number;
  header_focus_height: number;
  avatar_shape: string;
  background_color: string;
  body_font: string;
  header_bounds: string;
  header_image: string;
  header_image_focused: string;
  header_image_poster: string;
  header_image_scaled: string;
  header_stretch: boolean;
  link_color: string;
  show_avatar: boolean;
  show_description: boolean;
  show_header_image: boolean;
  show_title: boolean;
  title_color: string;
  title_font: string;
  title_font_weight: string;
}

export interface BlogTheme {
  header_full_width: number;
  header_full_height: number;
  header_focus_width: number;
  header_focus_height: number;
  avatar_shape: string;
  background_color: string;
  body_font: string;
  header_bounds: string;
  header_image: string;
  header_image_focused: string;
  header_image_poster: string;
  header_image_scaled: string;
  header_stretch: boolean;
  link_color: string;
  show_avatar: boolean;
  show_description: boolean;
  show_header_image: boolean;
  show_title: boolean;
  title_color: string;
  title_font: string;
  title_font_weight: string;
}

export interface Reblog {
  comment: string;
  tree_html: string;
}

export interface Trail {
  blog: Blog;
  post: {
    id: string;
  };
  content_raw: string;
  content: string;
  is_current_item: boolean;
  is_root_item: boolean;
}

export interface Post {
  type: string;
  is_blocks_post_format: boolean;
  blog_name: string;
  blog: Blog;
  id: string;
  id_string: string;
  is_blazed: boolean;
  is_blaze_pending: boolean;
  can_blaze: boolean;
  post_url: string;
  slug: string;
  date: string;
  timestamp: number;
  state: string;
  format: string;
  reblog_key: string;
  tags: string[];
  short_url: string;
  summary: string;
  should_open_in_legacy: boolean;
  recommended_source: unknown;
  recommended_color: unknown;
  note_count: number;
  title: string;
  body: string;
  reblog: Reblog;
  trail: Trail[];
  can_like: boolean;
  interactability_reblog: string;
  interactability_blaze: string;
  can_reblog: boolean;
  can_send_in_message: boolean;
  can_reply: boolean;
  display_avatar: boolean;
}
