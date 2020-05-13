import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { AppTextBold } from '../../ui/AppTextBold/AppTextBold';

export const Todo = ({ todo, onRemove, selectTodo }) => {

    const todoRemoveHandler = () => {
        onRemove(todo.id);
    };

    const selectTodoHandler = (() => {
        selectTodo(todo.id)
    })

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={selectTodoHandler}
            onLongPress={todoRemoveHandler}
        >
            <View style={styles.todo} >
                <AppTextBold>{todo.title}</AppTextBold>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todo: {
        flexDirection: "row",
        borderWidth: "solid",
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 5,
        alignItems: "center",
        padding: 15,
        marginBottom: 15
    }
});