export class ApiErrors extends Error{
  status: number;
  code: string;
  data: unknown;
  constructor({status ,code , data ,message}:{status:number;code:string;data:unknown;message:string;}){
    super(message);
    this.status = status; 
    this.code = code; 
    this.data = data;
  }
}
