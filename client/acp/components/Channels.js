/**
 * Created by Nicolas on 6/20/15.
 */
import Actions from '../actions/Actions';
import ChannelItemForm from './ChannelItemForm';
import ChannelsHeader from './ChannelsHeader';
import ChannelsList from './ChannelsList';
import React from 'react';

export default class Channels extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Actions.getChannels();
        Actions.getStreams();
        Actions.subscribe();
    }

    render() {
        return (
            <div>
                <ChannelItemForm />
                <ChannelsHeader />
                <ChannelsList />
                <ChannelItemForm />
            </div>
        );
    }
}