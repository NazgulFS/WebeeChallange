export class Sensor {
    public _id: string;
    public name: string;
    public location: { lat: number, long: number}
    public active: boolean;
    public minval: number;
    public maxval: number
}