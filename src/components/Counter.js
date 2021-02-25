import { Component } from 'react';
import PropTypes from 'prop-types';
import  { CounterControls } from './CounterControls';

export class Counter extends Component {
    //  Иначе создается через constructor с super
    state = {
        value: this.props.initialValue,
    }

    static propTypes = {
        initialValue: PropTypes.number,
        step: PropTypes.number,
        onClickIncrement: PropTypes.func,
        onClickDecrement: PropTypes.func,
    };

    static defaultProps = { initialValue: 0, step: 1 };

    // Ниже публичное свойство, создается через стрелочную функцию, в которой привязка контекста this
    //  Чтобы setState обновлял данные, нужно использовать стрелочную функцию с рендером через return
    //  для обновления предыдущего состояния! Для присвоения значения ---> через объект {}
    onClickIncrement = () => {
        this.setState((prevState, props) => {
            return {
                value: prevState.value + props.step
            }
        })
    }

    onClickDecrement = () => {
        this.setState((prevState, props) => {
            return {
                value: prevState.value - props.step
            }
        })
    }

    render() {
        return (
        <div>
            <span>{this.state.value}</span>
            <CounterControls
            onIncrement={this.onClickIncrement}
            onDecrement={this.onClickDecrement}/>
        </div>
        );
    }
}