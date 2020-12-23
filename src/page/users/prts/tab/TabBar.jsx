import React, {useState} from 'react'
import {useDispatch} from "react-redux";

import {TabBarNav} from './parts/tabBarNav/TabBarNav'
import {TabBarContent} from './parts/tabBarContent/TabBarContent'
import{getUsersAC} from '../../../../state/action'
import styles from './TabBar.module.scss'

export const TabBar = ({settings}) => {
    const dispatch = useDispatch()
    const [selectTab, setSelectTab] = useState(settings[0].id)
    const [searchUser, setSearchUser] = useState([])


    const selectData = settings.find((el) => el.id === selectTab).data
    const data = (searchUser.length !== 0) ? searchUser : selectData

    return (
        <div className={styles.Wrapper}>
            <TabBarNav settings={settings} selectTab={selectTab} callback={setSelectTab}/>
            <div><input className={styles.inputSearch} type="text" placeholder={'поиск'} onChange={(e) => {
                let newArray = selectData.filter(el => {
                    if (el.name.first === e.target.value || el.name.last === e.target.value) {
                        return el
                    }
                })
                setSearchUser(newArray)
            }}/></div>

            <TabBarContent data={data} btnStatus={selectTab === settings[0].id}/>
            {selectTab === settings[0].id
                ? <button onClick={() => dispatch(getUsersAC())}>Добавить еще</button>
                : null}
        </div>
    )
}