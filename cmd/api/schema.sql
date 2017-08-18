drop table servers;
drop table guilds;
create table guilds (
  id          uuid PRIMARY KEY,
  created_at  timestamp NOT NULL,
  updated_at  timestamp NOT NULL,

  netid        varchar(80) NOT NULL
);

create table servers (
  id          uuid PRIMARY KEY,
  created_at  timestamp NOT NULL,
  updated_at  timestamp NOT NULL,

  guild_id    uuid NOT NULL references guilds(id),

  name        varchar(80) NOT NULL,
  image       varchar(256) NOT NULL,
  hash        bytea,

  UNIQUE      (guild_id, name)
);

-- seed data
insert into guilds(
  id,
  created_at,
  updated_at,
  netid
) values (
  'C4F6DCBE-D855-4A19-BF49-8C8ECD0303CA',
  current_timestamp,
  current_timestamp,
  '93afae596389f026'
);
