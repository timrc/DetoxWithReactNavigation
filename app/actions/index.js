export const NAVIGATION_NAVIGATE = 'Navigation/NAVIGATE';
export const NAVIGATION_BACK = 'Navigation/BACK';
export const NAVIGATION_RESET = 'Navigation/RESET';

export function navigateTo({ scene, params }) {
    return {
        type: NAVIGATION_NAVIGATE,
        routeName: scene,
        params,
    };
}

export function navigate({ scene, params }) {
    return navigateTo({
        scene,
        params: {
            ...params,
            transition: 'slideFromRight',
        },
    });
}

export function back() {
    const navigationProps = {};

    return {
        type: NAVIGATION_BACK,
        ...navigationProps,
    };
}

export function reset(scene, params) {
    return {
        type: NAVIGATION_RESET,
        index: 0,
        actions: [
            navigateTo({ scene, params }),
        ],
    };
}

export function resetFlow(scene, params) {
    return {
        type: NAVIGATION_RESET,
        key: null,
        index: 0,
        actions: [
            navigateTo({ scene, params }),
        ],
    };
}

export function changeFlow(flow) {
    return {
        type: 'CHANGE_FLOW',
        flow,
    }
}
