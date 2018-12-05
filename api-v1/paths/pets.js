export default () => {
    const operations = {
        GET
    };

    function GET (req, res, next) {
        res.status(200).json([
            {
                name: 'foo'
            },
            {
                name: 'bar'
            },
            {
                name: 'fizz'
            }]);
    }

    operations.GET.apiDoc = {
        summary: 'Returns pets by name.',
        operationId: 'getPets',
        parameters: [
            {
                in: 'query',
                name: 'petsName',
                required: true,
                type: 'string'
            }
        ],
        responses: {
            200: {
                description: 'A list of pets that match the requested name.',
                schema: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Pets'
                    }
                }
            },
            default: {
                description: 'An error occurred',
                schema: {
                    additionalProperties: true
                }
            }
        }
    };
    return operations;
}