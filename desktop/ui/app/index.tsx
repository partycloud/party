import { apiStream } from './api'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { render } from 'react-dom'
import * as React from 'react'
import {
    Event,
    GetEventsRequest,
    Server,
} from "./pb/daemon_pb"
import { Daemon } from "./pb/daemon_pb_service"


interface ServerItemProps {
    server: Server.AsObject,
}

class ServerItem extends React.Component<ServerItemProps> {
    render() {
        const { id, name } = this.props.server
        return <div>
            id: {id}
            name: {name}
        </div>
    }
}

interface ServerListProps {
    list: ServerListStore
}

@observer
class ServerList extends React.Component<ServerListProps> {
    render() {
        const { servers } = this.props.list
        return <div>
            <ul>{servers.map(s => <ServerItem key={s.id} server={s} /> )}</ul>
        </div>
    }
}

class ServerListStore {
    @observable servers: Array<Server.AsObject> = []
}
const store = new ServerListStore()

render(<ServerList list={store} />, document.getElementById("root"))

apiStream(Daemon.Events, new GetEventsRequest(), (err, event: Event) => {
    if (event.hasServerupdate()) {
        const update = event.getServerupdate();
        if (update) {
            const server = update.toObject().server
            if (server) {
                store.servers.push(server)
            }
            console.log(update.toObject())
        }
    }
})

console.log(document.getElementById("root"))

