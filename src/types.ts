export interface ToolDef{name:string;description:string;params:ParamDef[];}
export interface ParamDef{name:string;type:"string"|"number"|"boolean"|"array";required?:boolean;description?:string;}
export interface GeneratedSchemas{typescript:string;python:string;}