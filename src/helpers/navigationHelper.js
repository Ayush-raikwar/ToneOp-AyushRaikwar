
import React from 'react';

export const navigationRef = React.createRef();

export function navigateTo(routeName) {
    navigationRef.current.navigate(routeName);
}
