abstract class Global{

}

class Development extends Global{
    public urls = {
        quotes: 'https://dummyjson.com/quotes',
    }
}

class Production extends Global{
    public urls = {
        quotes: 'stam.txt',
    }
}

const urlService = (process.env.NODE_ENV === "production") ? new Production(): new Development();
export default urlService;