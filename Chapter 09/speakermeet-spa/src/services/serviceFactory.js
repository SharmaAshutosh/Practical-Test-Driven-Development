import { MockSpeakerService } from './mockSpeakerService';

export default class ServiceFactory {
  constructor() {
    this._speakerService = null;
  }

  static createSpeakerService() {
    return (this._speakerService =
      this._speakerService || new MockSpeakerService());
  }
}
