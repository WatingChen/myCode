import React, { Component } from 'react'
import Relation from "./src/app/container/relation"
import { Tab } from './src/components';
import defaultData from './src/app/defaultData.json';
import demoDate from "./src/demo/student.pdman.json";
import { writeFile } from './src/utils/json';
const TabPane = Tab.TabPane;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [{
                title: "AUTH-用户安全/关系图",
                key: "AUTH-用户安全/关系图/fa-wpforms",
                value: "map&AUTH-用户安全/关系图",
                icon: "fa-wpforms",
                folding: false,
                com: this._getCpt("map&AUTH-用户安全/关系图", "AUTH-用户安全/关系图/fa-wpforms")
            }],
            show: "AUTH-用户安全/关系图/fa-wpforms",
            leftTabWidth: 200,
            toolsClickable: "map",
            tools: "map",
            changeDataType: "reset",
            dataSource: {
                modules: demoDate.modules,
                dataTypeDomains: defaultData.profile.defaultDataTypeDomains,
            },
            project: "",
            dataHistory: undefined,
            columnOrder: [
                { code: 'chnname', value: '字段名', com: 'Input', relationNoShow: false },
                { code: 'name', value: '逻辑名', com: 'Input', relationNoShow: false },
                { code: 'type', value: '类型', com: 'Select', relationNoShow: false },
                { code: 'dataType', value: '数据库类型', com: 'Text', relationNoShow: true },
                { code: 'remark', value: '说明', com: 'Input', relationNoShow: true },
                { code: 'pk', value: '主键', com: 'Checkbox', relationNoShow: false },
                { code: 'notNull', value: '非空', com: 'Checkbox', relationNoShow: true },
                { code: 'autoIncrement', value: '自增', com: 'Checkbox', relationNoShow: true },
                { code: 'defaultValue', value: '默认值', com: 'Input', relationNoShow: true },
                { code: 'relationNoShow', value: '关系图', com: 'Icon', relationNoShow: true },
                { code: 'uiHint', value: 'UI建议', com: 'Select', relationNoShow: true },
            ],

        }
        this.relationInstance = {};
        this.tableInstance = {};
    }
    _getCpt = (value) => {
        if (value.startsWith('map&')) {
            return (<Relation />);
        } else if (value.startsWith('entity&')) {
            return (<Table />);
        }
        return '';
    };
    _tabClose = () => {
        console.log('_tabClose');
    }
    _tabHeaderClick = () => {
        console.log('_tabHeaderClick');
    }
    _updateTabs = () => {
        console.log('_updateTabs');
    }
    _changeMode = () => {
        console.log('_changeMode');
    }
    _onDoubleClick = () => {
        console.log('_onDoubleClick');
    }
    saveProject = () => {
        console.log('saveProject');
    }
    saveProjectSome = () => {
        console.log('saveProjectSome');
    }
    _getTabRealName = (value) => {
        return "AUTH-用户安全[关系图]";
    }
    render() {
        const { dataSource, leftTabWidth, show, tabs, changeDataType, project, dataHistory, columnOrder } = this.state;
        return (
            <Tab
                dataSource={dataSource}
                leftTabWidth={leftTabWidth}
                onClose={this._tabClose}
                onClick={this._tabHeaderClick}
                show={show}
                tabs={tabs}
            >
                {tabs.filter(lefttab => !lefttab.folding).map((leftTab) => {
                    return (<TabPane
                        realName={this._getTabRealName(leftTab.title)}
                        icon={leftTab.icon}
                        title={leftTab.title.replace('&', '/')}
                        key={leftTab.key}
                    >{React.cloneElement(leftTab.com, {
                        id: leftTab.key,
                        value: leftTab.value,
                        changeDataType: changeDataType,
                        updateTabs: this._updateTabs,
                        ref: instance => {
                            if (leftTab.value.startsWith('entity&')) {
                                this.tableInstance[leftTab.key] = instance
                            } else {
                                this.relationInstance[leftTab.key] = instance
                            }
                        },
                        dataSource,
                        project,
                        saveProject: this.saveProject,
                        show,
                        dataHistory,
                        saveProjectSome: this.saveProjectSome,
                        columnOrder,
                        modeChange: this._changeMode,
                        writeFile,
                        openTab: this._onDoubleClick,
                    })}</TabPane>);
                })}
            </Tab>
        )
    }
}
