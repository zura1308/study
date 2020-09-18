function Player(nickname, realname, age){
    return {
        nickname: nickname,
        realname: realname,
        age: age,
        division: '',
        country: '',
        rank: 0,
        role: '',
        turnamentMoney: 0,
    }
}

const player1 = new Player("MidOne", "Yeik Nai Zheng", 24);
player1.division = "EU";
player1.country = "Malaysia";
player1.rank = 48;
player1.role = "Carry";
player1.turnamentMoney = "$1;737;028";

const player2 = new Player("Topson", "Topias Taavitsainen", 22);
player2.division = "EU";
player2.country = "Finland";
player2.rank = 107;
player2.role = "Solo Middle";
player2.turnamentMoney = "$5,424,214";

const player3 = new Player("Ceb", "Sébastien Debs", 28);
player3.division = "EU";
player3.country = "France-Lebanon";
player3.rank = 78;
player3.role = "OFflaner";
player3.turnamentMoney = "$5,505,812";

const player4 = new Player("Saksa", "Martin Sazdov", 25);
player4.division = "EU";
player4.country = "North Macedonia";
player4.rank = 45;
player4.role = "Support";
player4.turnamentMoney = "$1,000,392";

const player5 = new Player("Notail", "Johan Sundstein", 26);
player5.division = "EU";
player5.country = "Denmark";
player5.rank = 190;
player5.role = "Support-Capitan";
player5.turnamentMoney = "$6;904;849";

console.log(player1);
