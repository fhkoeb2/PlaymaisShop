--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4 (Postgres.app)
-- Dumped by pg_dump version 17.4 (Postgres.app)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Product" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    price numeric(10,2) NOT NULL,
    image character varying(255) NOT NULL,
    images text[] NOT NULL,
    category character varying(255) NOT NULL,
    rating numeric(3,1) NOT NULL,
    reviews integer NOT NULL,
    "inStock" boolean NOT NULL,
    pieces integer NOT NULL,
    "ageRange" character varying(255) NOT NULL,
    "relatedProducts" integer[] NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Product" OWNER TO postgres;

--
-- Name: Product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Product_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Product_id_seq" OWNER TO postgres;

--
-- Name: Product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Product_id_seq" OWNED BY public."Product".id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    price real NOT NULL,
    image text NOT NULL,
    images text[] NOT NULL,
    category text NOT NULL,
    rating real NOT NULL,
    reviews integer NOT NULL,
    in_stock boolean NOT NULL,
    pieces integer NOT NULL,
    age_range text NOT NULL,
    related_products integer[] NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.products OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO postgres;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: Product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product" ALTER COLUMN id SET DEFAULT nextval('public."Product_id_seq"'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Product" (id, name, description, price, image, images, category, rating, reviews, "inStock", pieces, "ageRange", "relatedProducts", "createdAt", "updatedAt") FROM stdin;
1	Playmais Castle Adventure Set	Build your own medieval castle with this Playmais set. Includes castle walls, towers, and decorative elements.	29.99	/images/products/castle.jpg	{/images/products/castle-1.jpg,/images/products/castle-2.jpg}	Castle	4.8	124	t	200	4-8	{2,3}	2025-05-07 18:33:50.504793	2025-05-07 18:33:50.504793
2	Space Station Explorer	Create an amazing space station with this Playmais set. Perfect for young astronauts.	34.99	/images/products/space.jpg	{/images/products/space-1.jpg,/images/products/space-2.jpg}	Space	4.7	98	t	250	5-10	{1,3}	2025-05-07 18:35:19.615337	2025-05-07 18:35:19.615337
3	Dinosaur World	Build a prehistoric landscape with dinosaurs and volcanoes. Educational and fun!	39.99	/images/products/dino.jpg	{/images/products/dino-1.jpg,/images/products/dino-2.jpg}	Dinosaur	4.9	156	t	300	4-9	{1,2}	2025-05-07 18:35:19.615337	2025-05-07 18:35:19.615337
4	City Center	Create a bustling city with buildings, roads, and vehicles. Perfect for imaginative play.	44.99	/images/products/city.jpg	{/images/products/city-1.jpg,/images/products/city-2.jpg}	City	4.6	112	t	350	5-12	{1,2}	2025-05-07 18:35:19.615337	2025-05-07 18:35:19.615337
5	Pirate Ship	Set sail on a pirate adventure with this detailed ship set. Includes ship, crew, and treasure.	49.99	/images/products/pirate.jpg	{/images/products/pirate-1.jpg,/images/products/pirate-2.jpg}	Pirate	4.8	89	t	400	6-12	{1,3}	2025-05-07 18:35:19.615337	2025-05-07 18:35:19.615337
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.products (id, name, description, price, image, images, category, rating, reviews, in_stock, pieces, age_range, related_products, created_at, updated_at) FROM stdin;
14	Playmais Deluxe Set	Advanced construction set with 1000 pieces. Perfect for creating complex structures and designs.	49.99	https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60}	Advanced Sets	4.8	256	t	1000	8-12	{1,3}	2025-05-07 21:04:27.788959	2025-05-07 21:04:27.788959
13	Playmais Basic Set	Perfect starter set for young builders. Includes 500 pieces of colorful Playmais construction material.	29.99	/images/products/playmais.png	{https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60}	Starter Sets	4.5	128	t	500	4-8	{2,3}	2025-05-07 21:04:27.786857	2025-05-07 21:04:27.786857
15	Playmais Master Builder Set	Professional construction set with 2000 pieces. For experienced builders who want to create masterpieces.	79.99	https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60}	Professional Sets	4.9	512	t	2000	12+	{1,2}	2025-05-07 21:04:27.789299	2025-05-07 21:04:27.789299
25	Playmais City Center	Create a bustling city with buildings, roads, and vehicles. Perfect for imaginative play.	44.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	City	4.6	112	t	350	5-12 years	{1,2}	2025-05-07 21:55:52.438367	2025-05-07 21:55:52.438367
26	Playmais Pirate Ship	Set sail on a pirate adventure with this detailed ship set. Includes ship, crew, and treasure.	49.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Pirate	4.8	89	t	400	6-12 years	{1,3}	2025-05-07 21:55:52.438876	2025-05-07 21:55:52.438876
27	Playmais Coral Reef	Create a vibrant underwater world with colorful coral formations and sea creatures.	32.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Ocean	4.7	76	t	280	5-10 years	{7,8}	2025-05-07 21:55:52.439321	2025-05-07 21:55:52.439321
28	Playmais Deep Sea Explorer	Build a submarine and explore the mysterious depths of the ocean.	37.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Ocean	4.6	92	t	320	6-11 years	{6,8}	2025-05-07 21:55:52.439737	2025-05-07 21:55:52.439737
29	Playmais Safari Adventure	Create an African savanna with lions, elephants, and other wild animals.	42.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Animals	4.9	118	t	360	5-12 years	{9,10}	2025-05-07 21:55:52.440381	2025-05-07 21:55:52.440381
30	Playmais Farm Friends	Build a farm with barns, animals, and tractors. Perfect for learning about farm life.	29.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Animals	4.8	85	t	240	4-8 years	{8,10}	2025-05-07 21:55:52.440914	2025-05-07 21:55:52.440914
31	Playmais Mars Colony	Build a futuristic colony on Mars with habitats and exploration vehicles.	45.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Space	4.7	103	t	380	6-12 years	{11,12}	2025-05-07 21:55:52.44132	2025-05-07 21:55:52.44132
32	Playmais Solar System	Create a model of our solar system with planets and spacecraft.	39.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Space	4.8	94	t	300	5-10 years	{10,12}	2025-05-07 21:55:52.44164	2025-05-07 21:55:52.44164
34	Playmais Fairy Garden	Create an enchanting fairy garden with magical elements and tiny houses.	34.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Fantasy	4.7	88	t	260	4-9 years	{12,14}	2025-05-07 21:55:52.442398	2025-05-07 21:55:52.442398
23	Playmais Space Station Explorer	Create an amazing space station with this Playmais set. Perfect for young astronauts.	34.99	/images/products/castle.jpg	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Space	4.7	98	t	250	5-10 years	{1,3}	2025-05-07 21:55:52.436832	2025-05-07 21:55:52.436832
33	Playmais Dragon Kingdom	Build a magical kingdom with dragons, castles, and mythical creatures.	47.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{vv}	Fantasy	4.9	127	t	420	6-12 years	{13,14}	2025-05-07 21:55:52.442062	2025-05-07 21:55:52.442062
24	Playmais Dinosaur World	Build a prehistoric landscape with dinosaurs and volcanoes. Educational and fun!	39.99	/images/products/dino-1.jpg	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Dinosaur	4.9	156	t	300	4-9 years	{1,2}	2025-05-07 21:55:52.437645	2025-05-07 21:55:52.437645
35	Playmais Airport	Build a complete airport with planes, control tower, and terminal buildings.	52.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Transportation	4.8	112	t	450	6-12 years	{15,16}	2025-05-07 21:55:52.443069	2025-05-07 21:55:52.443069
36	Playmais Train Station	Create a busy train station with tracks, trains, and station buildings.	44.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Transportation	4.7	95	t	380	5-11 years	{14,16}	2025-05-07 21:55:52.44363	2025-05-07 21:55:52.44363
37	Playmais Forest Adventure	Build a forest ecosystem with trees, animals, and a camping site.	37.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Nature	4.8	87	t	320	5-10 years	{17,18}	2025-05-07 21:55:52.443942	2025-05-07 21:55:52.443942
38	Playmais Mountain Lodge	Create a cozy mountain lodge with surrounding nature and wildlife.	41.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Nature	4.6	78	t	340	5-11 years	{16,18}	2025-05-07 21:55:52.444226	2025-05-07 21:55:52.444226
39	Playmais Ancient Egypt	Build pyramids, temples, and recreate ancient Egyptian civilization.	46.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Historical	4.9	105	t	400	6-12 years	{19,20}	2025-05-07 21:55:52.444503	2025-05-07 21:55:52.444503
40	Playmais Roman Empire	Create a Roman city with colosseum, temples, and Roman architecture.	49.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Historical	4.8	92	t	420	6-12 years	{18,20}	2025-05-07 21:55:52.4448	2025-05-07 21:55:52.4448
41	Playmais Sports Stadium	Build a complete sports stadium with field, stands, and facilities.	54.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Sports	4.7	98	t	480	6-12 years	{19,20}	2025-05-07 21:55:52.445068	2025-05-07 21:55:52.445068
42	Playmais Olympic Village	Create an Olympic village with various sports venues and athlete housing.	59.99	https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Sports	4.8	86	t	520	7-12 years	{19,20}	2025-05-07 21:55:52.445472	2025-05-07 21:55:52.445472
51	Goat Mountain City	A vibrant Playmais city nestled within a mountain landscape	44.99	/images/products/goatmountaincity.jpg	{/images/products/city-1.jpg,/images/products/packaging.jpg}	City	4.6	112	t	350	5-12	{}	2025-05-07 22:31:20.322878	2025-05-07 22:31:20.322878
44	Pirate Ship	Set sail on a pirate adventure with this detailed ship set. Includes ship, crew, and treasure.	49.99	/images/products/pirate.jpg	{/images/products/pirate-1.jpg,/images/products/packaging.jpg}	Pirate	4.8	89	t	400	6-12	{}	2025-05-07 22:10:06.143996	2025-05-07 22:10:06.143996
46	Marvel City	Welcome to Marvel city. A giant playmais set to construct and dream	44.99	/images/products/marvelcity.jpg	{/images/products/city-1.jpg,/images/products/packaging.jpg}	City	4.6	112	t	350	5-12	{}	2025-05-07 22:10:06.144015	2025-05-07 22:10:06.144015
47	Dinosaur World	Build a prehistoric landscape with dinosaurs and volcanoes. Educational and fun!	39.99	/images/products/dino.jpg	{/images/products/dino-1.jpg,/images/products/packaging.jpg}	Dinosaur	4.9	156	t	300	4-9	{}	2025-05-07 22:10:06.142349	2025-05-07 22:10:06.142349
45	Space Station Explorer	Create an amazing space station with this Playmais set. Perfect for young astronauts.	34.99	/images/products/space.jpg	{/images/products/space-1.jpg,/images/products/packaging.jpg}	Space	4.7	98	t	250	5-10	{}	2025-05-07 22:10:06.14404	2025-05-07 22:10:06.14404
50	Dinosaur World	Build a prehistoric landscape with dinosaurs and volcanoes. Educational and fun!	39.99	/images/products/dino.jpg	{/images/products/dino-1.jpg,/images/products/packaging.jpg}	Dinosaur	4.9	156	t	300	4-9	{}	2025-05-07 22:31:20.322446	2025-05-07 22:31:20.322446
52	Pirate Ship	Set sail on a pirate adventure with this detailed ship set. Includes ship, crew, and treasure.	49.99	/images/products/pirate.jpg	{/images/products/pirate-1.jpg,/images/products/packaging.jpg}	Pirate	4.8	89	t	400	6-12	{}	2025-05-07 22:31:20.323429	2025-05-07 22:31:20.323429
49	Space Station Explorer	Create an amazing space station with this Playmais set. Perfect for young astronauts.	34.99	/images/products/space.jpg	{/images/products/space-1.jpg,/images/products/packaging.jpg}	Space	4.7	98	t	250	5-10	{}	2025-05-07 22:31:20.321893	2025-05-07 22:31:20.321893
43	Playmais Castle Adventure Set	Build your own medieval castle with this Playmais set. Includes castle walls, towers, and decorative elements.	29.99	/images/products/castle.jpg	{/images/products/castle-1.jpg,/images/products/packaging.jpg}	Historical	4.8	124	t	200	4-8	{}	2025-05-07 22:10:06.144024	2025-05-07 22:10:06.144024
56	London Big Ben	laymais rendition of London, prominently featuring Big Ben	44.99	/images/products/London.jpg	{/images/products/city-1.jpg,/images/products/city-2.jpg}	City	4.6	112	t	350	5-12	{}	2025-05-07 22:33:10.893404	2025-05-07 22:33:10.893404
60	Sea City	A colorful Playmais city built right next to the sea	50.99	/images/products/seacity.jpg	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	City	0	0	f	2000	6-12	{1,2}	2025-11-22 11:40:19.416012	2025-11-22 11:40:19.416012
54	Space Station Explorer	Create an amazing space station with this Playmais set. Perfect for young astronauts.	34.99	/images/products/space.jpg	{/images/products/space-1.jpg,/images/products/space-2.jpg}	Space	4.7	98	t	250	5-10	{}	2025-05-07 22:33:10.892397	2025-05-07 22:33:10.892397
55	Dinosaur World	Build a prehistoric landscape with dinosaurs and volcanoes. Educational and fun!	39.99	/images/products/dino.jpg	{/images/products/dino-1.jpg,/images/products/dino-2.jpg}	Dinosaur	4.9	156	t	300	4-9	{}	2025-05-07 22:33:10.892968	2025-05-07 22:33:10.892968
61	Dessert City	A Playmais city in the desert, maintaining the vibrant colors and detailed style	50.99	/images/products/dessertcity.jpg	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	City	0	0	f	2000	6-12	{1,2}	2025-11-22 11:40:56.694441	2025-11-22 11:40:56.694441
57	Pirate Ship	Set sail on a pirate adventure with this detailed ship set. Includes ship, crew, and treasure.	49.99	/images/products/pirate.jpg	{/images/products/pirate-1.jpg,/images/products/pirate-2.jpg}	Pirate	4.8	89	t	400	6-12	{}	2025-05-07 22:33:10.893923	2025-05-07 22:33:10.893923
22	Playmais Castle Adventure Set	Build your own medieval castle with this Playmais set. Includes castle walls, towers, and decorative elements.	29.99	/images/products/castle.jpg	{https://images.unsplash.com/photo-1581091226825-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1581091226825-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	Historical	4.8	124	t	200	4-8 years	{}	2025-05-07 21:55:52.432496	2025-05-07 21:55:52.432496
58	New York	Playmais city resembling the iconic skyline of New York	40.99	/images/products/NewYork.jpg	{/images/products/city-2.jpg,/images/products/city-1.jpg}	City	4.8	123	f	5000	5-12	{1,2}	2025-11-22 11:29:02.7341	2025-11-22 11:29:02.7341
53	Playmais Castle Adventure Set	Build your own medieval castle with this Playmais set. Includes castle walls, towers, and decorative elements.	29.99	/images/products/castle.jpg	{/images/products/castle-1.jpg,/images/products/castle-2.jpg}	Historical	4.8	124	t	200	4-8	{}	2025-05-07 22:33:10.888647	2025-05-07 22:33:10.888647
48	Playmais Castle Adventure Set	Build your own medieval castle with this Playmais set. Includes castle walls, towers, and decorative elements.	29.99	/images/products/castle.jpg	{/images/products/castle-1.jpg,/images/products/castle-2.jpg}	Historical	4.8	124	t	200	4-8	{}	2025-05-07 22:31:20.317982	2025-05-07 22:31:20.317982
59	Jungle City	A colorful Playmais city nestled within a lush jungle environment	50.99	/images/products/junglecity.jpg	{https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=60&h=600}	City	0	0	f	2000	6-12	{1,2}	2025-11-22 11:39:28.361426	2025-11-22 11:39:28.361426
\.


--
-- Name: Product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Product_id_seq"', 5, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.products_id_seq', 61, true);


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

