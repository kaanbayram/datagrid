import React from 'react';
import { IDataGridBaseComponentsProps } from '../entities';
import '../assets/dataGridBaseComponentStyles.scss'
import { Caption } from './Caption';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import { Table } from './Table';
import { columns, rows } from '../../assets/dummyData';

export default class DataGridBaseComponent extends React.Component<IDataGridBaseComponentsProps, {}>{

    constructor(props: IDataGridBaseComponentsProps) {
        super(props);

        this.getCaption = this.getCaption.bind(this);
        this.getHeader = this.getHeader.bind(this);
        this.getBody = this.getBody.bind(this);
        this.getFooter = this.getFooter.bind(this);
    }

    getCaption() {
        return (
            <Caption
                caption={<div>DataGrid Caption</div>}
            />
        );
    }

    getHeader() {
        return (
            <Header
                toolbarButtons={[]}
                columns={columns}
            />
        );
    }

    getBody() {
        return (
            <Body
                rows={rows}
                columns={columns}
            />
        );
    }

    getFooter() {
        return (
            <Footer
            />
        );
    }

    render() {
        return (
            <>
                <Table
                    caption={this.getCaption()}
                    header={this.getHeader()}
                    body={this.getBody()}
                    footer={this.getFooter()}
                />
            </>
        )
    }
}