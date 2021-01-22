const modelExempel = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
];

let model = modelExempel;

let arrTransform = [];

function transformArr (){
    let objTransform;
    for (let i = 0; i<model.length; i ++) {
        objTransform = {
            id: i,
            name: model[i].user.name,
            posts: extractPost (i),
        };

        arrTransform.push(objTransform);
    }

};

function extractPost (i){
    let objTransformPost;
    
    let posts = [];
    for (let j = 0; j<model.length; j ++) {
        
        if (model[j].user.name==model[i].user.name) {
            objTransformPost = {
                id: posts.length,
                title: model[j].title,
                text: model[j].text,
            };
            if(j!=i) {
                model.splice(j,1);
            }
            posts.push(objTransformPost);
        }
    }
    return posts;
};



transformArr ();
console.log(arrTransform);

let reModel = [
    {
     id: 0,
     name: 'user 1',
     posts: [
                {
                    id: 0,
                    title: 'Title text 1',
                    text: 'Some text 1',
                },
                {
                    id: 1,
                    title: 'Title text 3',
                    text: 'Some text 3',
                },
                {
                    id: 2,
                    title: 'Title text 5',
                    text: 'Some text 5'
                },
            ],
    },
    {
        id: 1,
        name: 'user 2',
        posts: [
            {
                id: 0,
                title: 'Title text 2',
                text: 'Some text 2',
            },
        ]
    },
    {
        id: 2,
        name: 'user 3',
        posts: [
            {
                id: 0,
                title: 'Title text 4',
                text: 'Some text 4',
            },
        ]
    }
 ];
