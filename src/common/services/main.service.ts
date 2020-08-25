
export class MainService {
  static log( data: any ): void {
    console.log( '-----------------------------------------' );
    console.log( data );
    console.log( '-----------------------------------------' );
  }

  static createValidObjectToTest( obj ) {
    return JSON.stringify(obj).replace(/\"([^(\")"]+)\":/g, '$1:');
  }

}
