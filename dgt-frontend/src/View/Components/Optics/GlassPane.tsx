import React, {CSSProperties} from 'react';
import './GlassPane.css'

interface GlassPaneProps {
    children: React.ReactNode
    style?: Partial<CSSProperties>
    className?: string
}

class GlassPane extends React.Component<GlassPaneProps, {}> {

    render() {
        return (
            <div className={"glass-pane " + this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

}

export default GlassPane;
