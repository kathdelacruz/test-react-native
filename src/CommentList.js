import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
} from 'react-native';

import Comment from './Comment';

export default class CommentList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => {
          r1 !== r2
        }})

    this.state = {
      dataSource: ds
    }
  }

  componentDidMount() {
    this.updateDataSource(this.props.comments)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.comments !== this.props.comments) {
      this.updateDataSource(newProps.comments)
    }
  }

  updateDataSource = (data) => {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }

  handlePress(comment) {
    Actions.commentDetail({ comment });
  }

  render() {
    const comment = {
      image: 'https://buzz.ie/wp-content/uploads/2016/12/chris-martin-israel.jpg',
      name: 'Chris Martin',
      likes: 200,
      comments: 140
    }

    return (
      <ListView
        enableEmptySections = {true}
        dataSource={this.state.dataSource}
        renderRow={(comment) => {
          return (
            <Comment text={comment.text} avatar={comment.userPhoto} />
          )
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});