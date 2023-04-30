import firestore from '@react-native-firebase/firestore';
import _ from 'lodash';
import { useEffect, useState } from 'react';

export const useFirestoreCollection = (location) => {
    const path = location.join('/');
    const [data, setData] = useState<any>();
    const [limit, setLimit] = useState<any>();
    const [loading, setLoading] = useState(false);

    const updateData = (snapshot) => {
        setLoading(false);
        let data = snapshot?.docs?.map((d) => {
            return {
                ...d?.data(),
                id: d?.id,
            };
        });
        setData(data);
    };
    useEffect(() => {
        if (_.size(_.compact(location)) != _.size(location)) {
            return;
        }
        setLoading(true);
        let query = firestore().collection(`${path}`);

        if (limit) {
            query.limit(limit).onSnapshot(updateData);
            return;
        }

        query.onSnapshot(updateData);
    }, [path, limit]);

    const createRecord = async (data) => {
        let { id } = await firestore()
            .collection(`${path}`)
            .add({
                ...data,
                createdAt: firestore.FieldValue.serverTimestamp(),
            });
        return id;
    };

    const updateRecord = async (id, data) => {
        await firestore()
            .doc(`${path}/${id}`)
            .set({ ...data }, { merge: true });
    };
    const deleteRecord = async (id) => {
        await firestore().doc(`${path}/${id}`).delete();
    };

    return {
        createRecord,
        updateRecord,
        deleteRecord,
        data,
        loading,
        setLimit,
        limit,
    };
};

export const useFirestoreDocument = (location) => {
    const path = location.join('/');
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (_.size(_.compact(location)) != _.size(location)) {
            return;
        }
        setLoading(true);
        firestore()
            .doc(`${path}`)
            .onSnapshot((snapshot) => {
                setLoading(false);
                setData({ ...snapshot?.data(), id: snapshot?.id });
            });
    }, [path]);

    const updateRecord = async (data) => {
        await firestore()
            .doc(`${path}`)
            .set(
                { updatedAt: firestore.FieldValue.serverTimestamp(), ...data },
                { merge: true }
            );
    };

    const deleteRecord = async () => {
        await firestore().doc(`${path}`).delete();
    };

    return { updateRecord, deleteRecord, data, loading };
};
