export class Alert {
  type: string;
  message: string;
  [propName: string]: any; //IMPORTANTE!!!!

  constructor(type: string, message: string) {
    this.type = type;
    this.message = message;
  }
}
