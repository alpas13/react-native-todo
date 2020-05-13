import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Modal, Alert} from 'react-native';
import {Theme} from '../../const';
import {AppButton} from '../../ui/AppButton/AppButton';

export const EditTodo = (props) => {
  const {visible, onVisible, value, onSave} = props;
  const [title, setTitle] = useState(value);

  return (
    <Modal visible={visible} animationType={'slide'} transparent={false}>
      <View style={styles.wrapper}>
        <TextInput
          onChangeText={setTitle}
          placeholder={'Write new title'}
          value={title}
          style={styles.textInput}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <AppButton
              color={Theme.DANGER_COLOR}
              onPress={() => {
                setTitle(value);
                onVisible(false);
              }}
            >
              Cancel
            </AppButton>
          </View>
          <View style={styles.button}>
            <AppButton
              onPress={() => {
                if (title.trim().length < 3) {
                  Alert.alert(
                    'Error!',
                    `The title should be more than 3 characters,  this one contains ${
                      title.trim().length
                    } characters!`,
                    [
                      {
                        text: 'Cancel',
                        style: 'cancel',
                      },
                    ]
                  );
                } else {
                  onSave(title);
                }
              }}
            >
              Save
            </AppButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    padding: 10,
    borderBottomColor: Theme.MAIN_COLOR,
    borderBottomWidth: 2,
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '40%',
  },
});
