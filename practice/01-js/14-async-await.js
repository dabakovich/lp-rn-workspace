const { sendMessageWithImprovedPromise, request } = require("./13-promises");

async function doSomethingAsync() {
    console.log('Before async method call')

    const response = await sendMessageWithImprovedPromise('Some message');

    console.log('After async method call');
    console.log(response);

    return response;
}

// doSomethingAsync();






const doSomethingAsyncWithErrorHandling = async () => {
    try {
        const response = await doSomethingAsync();
        console.log('response');
        console.log(response);
    } catch (error) {
        console.error('Error cathed!');
        console.error(error);
    } finally {
        console.log('Some required functionality');
    }
}

// doSomethingAsyncWithErrorHandling();






const sendFewSequentialMessages = async () => {
    try {
        await sendMessageWithImprovedPromise('First message');

        await sendMessageWithImprovedPromise('Second message');
        
        await sendMessageWithImprovedPromise('Third message');
    } catch (error) {
        console.error('Error cathed!');
        console.error(error);
    }
}

// sendFewSequentialMessages();






const makeFewParallelRequests = async () => {
    try {
        const response = await Promise.all([
            request('First request'),
            request('Second request'),
            request('Third request'),
        ])

        console.log(response);
    } catch (error) {
        console.error('Error cathed!');
        console.error(error);
    }
}

// makeFewParallelRequests();
