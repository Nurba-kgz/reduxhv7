import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../features/todosSlice';
import { Button, ButtonGroup } from '@mui/material';

const Tabs = () => {
    const dispatch = useDispatch();
    const activeTab = useSelector(state => state.todos.activeTab);

    const handleTabChange = (tab) => {
        dispatch(setActiveTab(tab));
    };

    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button
                onClick={() => handleTabChange('tab1')}
                color={activeTab === 'tab1' ? 'primary' : 'default'}
            >
                Tab 1
            </Button>
            <Button
                onClick={() => handleTabChange('tab2')}
                color={activeTab === 'tab2' ? 'primary' : 'default'}
            >
                Tab 2
            </Button>
            <Button
                onClick={() => handleTabChange('tab3')}
                color={activeTab === 'tab3' ? 'primary' : 'default'}
            >
                Tab 3
            </Button>
        </ButtonGroup>
    );
};

export default Tabs;