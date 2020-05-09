import EventEmitter from 'await-event-emitter';

/**
 *
 * @param {string} type - name of the event
 * @returns {symbol} - symbol
 */
export const EventType = (type) => Symbol(type);

/**
 * EventManager for node-platform, you can extend it to create your own EventManager
 */
export class EventManager extends EventEmitter {
  constructor(events, name = 'node-platform') {
    super();

    this.events = events;
    this.name = name;
    Object.freeze(this.name); // avoid changing EventManager name
  }

  /**
   *
   * @param {symbol} event - Symbol of the event to emit
   * @param  {...any} args - list of arguments to pass to the event separated by comma
   * @returns {Promise<EventManager>} - Return a promise that the event will be completed
   */
  async emit(event, ...args) {
    const evtName = event.toString().slice(7, -1); // remove "Symbol()" from description
    if (!this.events[evtName] || this.events[evtName] != event) {
      throw new Error(
          'EventManager (' + this.name + ') have no event: ' + evtName,
      );
    }

    await super.emit(event, ...args);
    return this;
  }

  /**
      @callback listenerCb
      @param {...Object} args
   */
  /**
   *
   * @param {symbol} event - Symbol of the event to register on
   * @param {listenerCb} listener - Callback function that will be called when the emit will be emitted
   * @instance
   * @returns {EventManager} - Returns the EventManager instance to eventually continue with the chain
   */
  on(event, listener) {
    const evtName = event.toString().slice(7, -1); // remove "Symbol()" from description
    if (!this.events[evtName] || this.events[evtName] != event) {
      throw new Error(
          'EventManager (' + this.name + ') have no event: ' + evtName,
      );
    }

    super.on(event, listener);
    return this;
  }
}
