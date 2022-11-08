import React from "react";

export default class Calendly extends React.Component {
    componentDidMount() {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
        head.appendChild(script);
    }
    
    render() {
        return (
            <div>
                <div id="schedule_form">
                    <div class="calendly-inline-widget"
                        data-url="https://calendly.com/jenyckee/one-on-one?background_color=ffffff&text_color=000000&primary_color=1ca99d"
                        style={{ minWidth: '320px', height: '700px' }}>
                    </div>
                </div>
            </div>
        );
    }
}
