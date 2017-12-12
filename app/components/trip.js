import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native'
import { Avatar } from 'react-native-elements'

class Trip extends PureComponent {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style = {{backgroundColor: 'cyan', marginBottom: 10}}>
        <View style = {{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <View>
            <Avatar
              small
              rounded
              source = {this.props.avatar}
              imageProps = {{resizeMode: 'cover'}}
            />
          </View>
          <View style = {{marginLeft: 10}}>
            <Text>
              {this.props.host}
            </Text>
          </View>
        </View>

        <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style = {{flexDirection: 'column'}}>
            <Text>
              {this.props.destination}
            </Text>
            <View style = {{flexDirection: 'row'}}>
              <Text>
                from
              </Text>
              <Text style = {{marginLeft: 10}}>
                {this.props.origin}
              </Text>
            </View>
            <View style = {{flexDirection: 'row'}}>
              <Text>
                {this.props.date}
              </Text>
            </View>
          </View>

          <View>

          </View>
        </View>

      </View>
    );
  }
}

export default Trip;
