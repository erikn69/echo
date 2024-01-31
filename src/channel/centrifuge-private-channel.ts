import { CentrifugePresenceChannel } from './centrifuge-presence-channel';

/**
 * This class represents a Centrifuge private channel.
 */
export class CentrifugePrivateChannel extends CentrifugePresenceChannel {
    /**
     * Register a callback to be called anytime the member list changes.
     */
    here(callback: Function): CentrifugePresenceChannel {
        return this;
    }
}
