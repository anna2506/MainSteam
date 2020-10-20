CREATE SEQUENCE public.player_id_seq
        INCREMENT 1
        START 1
        MINVALUE 1;

ALTER SEQUENCE public.player_id_seq
        OWNER TO postgres;

CREATE TABLE public.player (
        id INTEGER NOT NULL default nextval('player_id_seq'::regclass),
        login TEXT NOT NULL,
        pass_hash TEXT NOT NULL,
        pass_salt TEXT NOT NULL,
        experience INTEGER NOT NULL default 0,
        country TEXT default 'Russia',
        email TEXT NOT NULL,
        CONSTRAINT pk_player PRIMARY KEY (id)
);

CREATE UNIQUE INDEX player_pk
        ON public.player(id);

ALTER TABLE public.player
        OWNER TO postgres;

CREATE SEQUENCE public.game_id_seq
        INCREMENT 1
        START 1
        MINVALUE 1;

ALTER SEQUENCE public.game_id_seq
        OWNER TO postgres;

CREATE TABLE game (
        id INTEGER NOT NULL default nextval('game_id_seq'::regclass),
        name TEXT NOT NULL,
        description TEXT default '',
        CONSTRAINT pk_game PRIMARY KEY (id)
);

CREATE UNIQUE INDEX game_pk
        ON public.game(id);

ALTER TABLE public.game
        OWNER TO postgres;

CREATE SEQUENCE public.player_game_id_seq
        INCREMENT 1
        START 1
        MINVALUE 1;

ALTER SEQUENCE public.player_game_id_seq
        OWNER TO postgres;

CREATE TABLE player_game (
        id INTEGER NOT NULL default nextval('player_game_id_seq'::regclass),
        player_id INTEGER NOT NULL,
        game_id INTEGER NOT NULL,
        time_spent INTEGER default 0,
        high_score INTEGER NOT NULL default 0,
        beat_100 BOOLEAN default false,
        beat_200 BOOLEAN default false,
        beat_400 BOOLEAN default false,
        beat_700 BOOLEAN default false,
        beat_1000 BOOLEAN default false,
        beat_10000 BOOLEAN default false,
        CONSTRAINT pk_player_game PRIMARY KEY (id),
        CONSTRAINT fk_ug_player FOREIGN KEY (player_id) REFERENCES public.player(id),
        CONSTRAINT fk_ug_game FOREIGN KEY(game_id) REFERENCES public.game(id)
);

CREATE UNIQUE INDEX player_game_pk
        ON public.player_game(id);

CREATE UNIQUE INDEX player_game_fk_player
        ON public.player_game(player_id);

CREATE UNIQUE INDEX player_game_fk_game
        ON public.player_game(game_id);

ALTER TABLE public.player_game
        OWNER TO postgres;