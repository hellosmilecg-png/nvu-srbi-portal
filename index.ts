export type Article={id:string;title:string;slug:string;excerpt:string|null;content:string;image_url:string|null;category_id:string|null;published_at:string|null;author:string|null;status:'draft'|'published';views:number;categories?:{name:string;slug:string}|null};
export type Category={id:string;name:string;slug:string;description:string|null};
