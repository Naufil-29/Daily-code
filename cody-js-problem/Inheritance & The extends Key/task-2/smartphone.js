import { ElectronicDevice } from './electronicDevice.js';

export class Smartphone extends ElectronicDevice {
  // Smartphone inherits from ElectronicDevice
  constructor(brand, model) {
    super(brand, model);
  }
}