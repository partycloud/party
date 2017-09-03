drop table if exists servers;
drop table if exists guilds;
drop table if exists devices;

create table devices (
  id          uuid PRIMARY KEY,
  created_at  timestamp NOT NULL,
  updated_at  timestamp NOT NULL,

  name    text NOT NULL
);

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

  guild_id         uuid NOT NULL references guilds(id),
  current_owner_id uuid NOT NULL references devices(id),

  name        varchar(80) NOT NULL,
  image       varchar(256) NOT NULL,

  fileset_hash       bytea,
  fileset_bytes      bigint,

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

insert into devices(id, created_at, updated_at, username) VALUES (
  'C6D62701-74F3-4095-A32C-91A9BD730E4E',
  current_timestamp, current_timestamp,
  'dave1'
);
insert into devices(id, created_at, updated_at, username) VALUES (
  'F093448D-F093-42C9-8966-8D6805F64B74',
  current_timestamp, current_timestamp,
  'dave2'
);
insert into devices(id, created_at, updated_at, username) VALUES (
  'BC44BBDE-C3B0-456B-8DFE-A2FDA90A581E',
  current_timestamp, current_timestamp,
  'dave3'
);
