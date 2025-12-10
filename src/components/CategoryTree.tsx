'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChevronDown, ChevronRight, Folder, FolderOpen } from 'lucide-react';

type CategoryNode = {
    name: string;
    children: string[];
};

const CATEGORY_STRUCTURE: CategoryNode[] = [
    {
        name: 'Themes',
        children: ['Castle', 'Pirate', 'Space', 'Dinosaur', 'Fantasy', 'Historical'],
    },
    {
        name: 'Real World',
        children: ['City', 'Transportation', 'Sports'],
    },
    {
        name: 'Nature',
        children: ['Nature', 'Animals', 'Ocean'],
    },
];

export default function CategoryTree() {
    const searchParams = useSearchParams();

    // Get currently selected categories from URL
    const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());

    // Initialize selected categories from URL
    useEffect(() => {
        const params = searchParams.getAll('category');
        setSelectedCategories(new Set(params));
    }, [searchParams]);

    // Initialize state based on current category or default to all expanded
    const [expanded, setExpanded] = useState<Record<string, boolean>>({
        'Themes': true,
        'Real World': true,
        'Nature': true,
    });

    const toggleExpand = (category: string) => {
        setExpanded(prev => ({ ...prev, [category]: !prev[category] }));
    };

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, groupName?: string) => {
        const { value, checked } = e.target;
        const newSelected = new Set(selectedCategories);

        if (groupName) {
            // It's a parent category
            const group = CATEGORY_STRUCTURE.find(g => g.name === groupName);
            if (group) {
                group.children.forEach(child => {
                    if (checked) {
                        newSelected.add(child);
                    } else {
                        newSelected.delete(child);
                    }
                });
            }
        } else {
            // It's a leaf node
            if (checked) {
                newSelected.add(value);
            } else {
                newSelected.delete(value);
            }
        }

        setSelectedCategories(newSelected);
    };

    // Helper to check if all children of a group are selected
    const isGroupSelected = (group: CategoryNode) => {
        return group.children.every(child => selectedCategories.has(child));
    };

    // Helper to check if some (but not all) children of a group are selected
    const isGroupIndeterminate = (group: CategoryNode) => {
        const selectedCount = group.children.filter(child => selectedCategories.has(child)).length;
        return selectedCount > 0 && selectedCount < group.children.length;
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 px-2">Categories</h3>

            <div className="space-y-1">
                {CATEGORY_STRUCTURE.map((group) => {
                    const isExpanded = expanded[group.name];
                    const groupSelected = isGroupSelected(group);
                    const groupIndeterminate = isGroupIndeterminate(group);

                    return (
                        <div key={group.name} className="space-y-1">
                            <div className="flex items-center justify-between px-2 py-1.5 hover:bg-gray-50 rounded-md">
                                <button
                                    type="button"
                                    onClick={() => toggleExpand(group.name)}
                                    className="flex items-center gap-2 flex-1 text-left text-sm text-gray-700"
                                >
                                    {isExpanded ? <FolderOpen className="w-4 h-4 text-gray-400" /> : <Folder className="w-4 h-4 text-gray-400" />}
                                    {group.name}
                                </button>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={groupSelected}
                                        ref={input => {
                                            if (input) input.indeterminate = groupIndeterminate;
                                        }}
                                        onChange={(e) => handleCheckboxChange(e, group.name)}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <button type="button" onClick={() => toggleExpand(group.name)}>
                                        {isExpanded ? (
                                            <ChevronDown className="w-3 h-3 text-gray-400" />
                                        ) : (
                                            <ChevronRight className="w-3 h-3 text-gray-400" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {isExpanded && (
                                <div className="ml-4 space-y-1 border-l border-gray-100 pl-2">
                                    {group.children.map((child) => (
                                        <label
                                            key={child}
                                            className="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm text-gray-600 hover:bg-gray-50 cursor-pointer"
                                        >
                                            <input
                                                type="checkbox"
                                                name="category"
                                                value={child}
                                                checked={selectedCategories.has(child)}
                                                onChange={(e) => handleCheckboxChange(e)}
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            {child}
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
